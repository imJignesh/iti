// pages/api/career-upload.js
import { createReadStream, promises as fs } from 'fs';
import { resolve } from 'path';
import { IncomingForm } from 'formidable';
import FormData from 'form-data';
import axios from 'axios'; // <-- NEW IMPORT

// --- CRITICAL CONFIG: Disable Next.js Body Parser to handle file upload ---
export const config = {
    api: {
        bodyParser: false, // CRITICAL: This allows us to process the file stream manually
    },
};

// --- CONFIGURATION for the Career Form ---
const CAREER_FORM_CONFIG = {
    zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Career/formperma/5MGjIF4X7ef6W9KUqep6lOshMxA11LSyAx7Ub7300E4/htmlRecords/submit',
    fieldMap: {
        // Map fields from request body to Zoho field names
        name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode',
        location: 'SingleLine1', position: 'SingleLine2', department: 'SingleLine3',
        job_type: 'Radio', notice_period: 'SingleLine4', experience: 'SingleLine5',
        pageinfo: 'SingleLine6',
    },
    redirectUrl: '/thank-you-career',
};

// --- HELPER: Parse Multipart Form Data (File + Text) ---
const parseMultipartForm = (req) => {
    // Note: The 'tmp' directory must exist in your project root or resolve correctly.
    const form = new IncomingForm({
        uploadDir: resolve('./tmp'),
        keepExtensions: true,
        maxFileSize: 5 * 1024 * 1024, // 5MB limit 
        multiples: false,
    });

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);

            // Formidable returns fields as arrays, map them to single values
            const data = {};
            for (const key in fields) {
                data[key] = fields[key][0];
            }
            // File field (key used in CareerForm.jsx is 'cv_file')
            const cvFile = files.cv_file ? files.cv_file[0] : null;

            resolve({ data, cvFile });
        });
    });
};


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    let cvFile = null;
    let tempFilePath = null;

    try {
        // 1. Parse the incoming multipart request (file + text fields)
        const { data, cvFile: parsedCvFile } = await parseMultipartForm(req);
        cvFile = parsedCvFile;
        tempFilePath = cvFile ? cvFile.filepath : null;

        if (data.pageinfo) {
            console.warn('Forcing pageinfo (SingleLine6) to empty string to prevent Zoho URL length error.');
            data.pageinfo = '';
        }

        if (!cvFile || !tempFilePath) {
            return res.status(400).json({ success: false, message: "CV file is missing or corrupted on the server." });
        }

        const { zohoUrl, fieldMap, redirectUrl } = CAREER_FORM_CONFIG;

        // 2. Build the new Zoho Multipart Payload (FormData)
        const zohoFormData = new FormData();

        // Map text fields
        for (const [key, zohoField] of Object.entries(fieldMap)) {
            if (data[key] !== undefined) {
                // Append the form field
                zohoFormData.append(zohoField, data[key] || '');
            }
        }

        // Map the File: Zoho's file upload field name is 'FileUpload'
        zohoFormData.append('FileUpload', createReadStream(cvFile.filepath), cvFile.originalFilename);

        // 3. Submit to Zoho using AXIOS
        const zohoResponse = await axios.post(zohoUrl, zohoFormData, { // <-- USING AXIOS
            headers: zohoFormData.getHeaders(), // CRITICAL for form-data package
            maxRedirects: 0, // Prevent axios from following Zoho's 302 redirect
            validateStatus: status => status === 200 || status === 302, // Only treat 200/302 as successful
        });


        if (zohoResponse.status === 200 || zohoResponse.status === 302) {
            return res.status(200).json({ success: true, message: 'Career form submitted successfully.', redirectUrl });
        } else {
            // This block is unlikely to be reached due to validateStatus, but kept for robustness
            const zohoErrorText = zohoResponse.data || 'No response data';
            throw new Error(`Zoho submission failed with status ${zohoResponse.status}. Response: ${zohoErrorText}`);
        }

    } catch (error) {
        // Log the error detail
        console.error('API Route Error:', error.message);
        // If it's an Axios error, the full response might be in error.response
        if (error.response) {
            console.error('Zoho response data:', error.response.data);
        }
        return res.status(500).json({ success: false, message: `An internal error occurred: ${error.message}` });
    } finally {
        // 4. CLEAN UP: Delete the temporary file
        if (tempFilePath) {
            try {
                await fs.unlink(tempFilePath);
            } catch (cleanupError) {
                console.error('Error cleaning up temp file:', cleanupError);
            }
        }
    }
}