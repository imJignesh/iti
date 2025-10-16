// pages/api/submit-form.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 💡 NEW: Destructure the 'formType' field from the request body
    const { name, email, phone, school, message, pageinfo, formType } = req.body;

    // --- 1. DETERMINE THE CURRENT PAGE PATH/SLUG ---
    const urlMatch = pageinfo ? pageinfo.split(' | ')[0].replace('URL: ', '').toLowerCase() : '';
    let path = '';
    try {
        if (urlMatch) {
            path = new URL(urlMatch).pathname.toLowerCase();
        }
    } catch (e) {
        path = '';
    }

    // --- 2. CONFIGURATION: DEFINE ALL 5 FORMS BY THEIR SLUGS/TYPE AND ALIASES ---
    const FORM_CONFIGS = [
        {
            // --- FORM 1: BLOG SIDEBAR FORM (Uses explicit type match) ---
            // Set the 'type' to match the value passed from the front end.
            type: 'BLOG_SIDEBAR',
            // The 'slugs' array is not used for this config, but kept for structure.
            slugs: [],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/BlogDetailPage/formperma/mgvhc7pg0i_9ypjsyAhQqnD4vnIuZusObkrMNZ5f6yk/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            }
        },
        {
            type: 'Organic_Curriculum', // Optional type for completeness
            slugs: [
                "/ib-curriculum-tutors-in-dubai",
                "/courses/ibdp-tutors-in-dubai",
                "/courses/myp-tutors-in-dubai",
                "/british-curriculum-tutors-in-dubai",
                "/courses/a-level-tutors-in-dubai",
                "/courses/igcse-tutors-in-dubai",
                "/courses/homeschooling-tutors-in-dubai",
                "/act-tutors-in-dubai",
                "/advanced-placements-tutors-in-dubai"
            ],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/IgniteCourses/formperma/58L0c_DIb7n5At6RTaPaWpu0ymjyqTDe2O7brKyZl2c/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            }
        },
        {
            type: 'Organic_Subject', // Optional type for completeness
            slugs: [
                "/english-tutor-in-dubai",
                "/french-tutor-in-dubai",
                "/spanish-tutor-in-dubai",
                "/computer-science-tutor-in-dubai",
                "/economics-tutor-in-dubai",
                "/biology-tutor-in-dubai",
                "/chemistry-tutor-in-dubai",
                "/physics-tutor-in-dubai",
                "/maths-tutor-in-dubai",
                "/business-studies-tutor-in-dubai",
                "/accounting-tutor-in-dubai",
                "/psychology-tutor-in-dubai"
            ],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/OrganicSubjectForm/formperma/KvWSFWr1Am7ISNcB-oG4RhgjmaIFGp0LOV4RgxPxFcw/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            }
        },

    ];
    // -----------------------------------------------------------------


    // --- 3. MATCH THE CURRENT PATH TO A CONFIGURATION (PRIORITIZING TYPE) ---
    let submittedFormConfig;

    if (formType) {
        // 1. Prioritize explicit type matching (e.g., for pages without a unique URL prefix)
        submittedFormConfig = FORM_CONFIGS.find(config => config.type === formType);
    }

    // 2. Fallback to path matching if no explicit type was provided or found
    if (!submittedFormConfig) {
        submittedFormConfig = FORM_CONFIGS.find(config =>
            config.slugs && config.slugs.includes(path) // Only check slugs if the property exists
        );
    }

    if (!submittedFormConfig) {
        console.error(`Submission failed: No form config found. Type: ${formType}, Path: ${path}. Page Info: ${pageinfo}`);
        return res.status(400).json({ success: false, message: `Invalid form source. Type '${formType}' or Path '${path}' not mapped to any configuration.` });
    }

    const { zohoUrl, fieldMap } = submittedFormConfig;

    // --- 4. BUILD THE DYNAMIC ZOHO PAYLOAD ---
    const zohoPayload = new URLSearchParams();

    // ... (rest of the payload building logic is unchanged)
    // Map the received data fields to Zoho's required field names (aliases)
    zohoPayload.append(fieldMap.name, name || '');
    zohoPayload.append(fieldMap.email, email || '');
    zohoPayload.append(fieldMap.phone, phone || '');
    zohoPayload.append(fieldMap.school, school || '');

    // Check if the form configuration has a message field before appending
    if (fieldMap.message) {
        zohoPayload.append(fieldMap.message, message || '');
    }

    // Check if the form configuration has a pageinfo field before appending
    if (fieldMap.pageinfo) {
        zohoPayload.append(fieldMap.pageinfo, pageinfo || '');
    }

    // --- 5. SUBMIT TO ZOHO ---
    try {
        const zohoResponse = await fetch(zohoUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: zohoPayload.toString(),
        });

        if (zohoResponse.status === 200 || zohoResponse.status === 302) {
            return res.status(200).json({ success: true, message: 'Form submitted successfully to Zoho.' });
        } else {
            const zohoErrorText = await zohoResponse.text();
            console.error('Zoho submission failed.', { status: zohoResponse.status, response: zohoErrorText });
            return res.status(502).json({ success: false, message: `Zoho submission failed with status ${zohoResponse.status}.` });
        }
    } catch (error) {
        console.error('Local API Route Error:', error);
        return res.status(500).json({ success: false, message: 'An internal error occurred in the Next.js API route.' });
    }
}