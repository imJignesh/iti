// pages/api/submit-form.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 💡 UPDATED: Destructure ALL fields, including new Career fields
    const {
        name, email, phone, school, course, message, pageinfo, formType, curriculum,
        location, department, position, subjects, job_type, notice_period, experience
    } = req.body;

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

    // --- 2. CONFIGURATION: DEFINE ALL FORMS BY THEIR SLUGS/TYPE, ALIASES, AND REDIRECT URLS ---
    const FORM_CONFIGS = [
        {
            type: 'POPUP_FORM', // Unique identifier passed from the frontend
            slugs: [],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/popupform/formperma/cGgm_RXPoyqKpSDvZhp5unQZcl05haUEI_sVxSNGcXA/htmlRecords/submit',
            fieldMap: {
                // Map API fields (from request body) to Zoho field names
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                curriculum: 'Dropdown',
            },
            redirectUrl: '/thank-you-popup', // <-- Unique thank-you page for popup
        },
        {
            // --- FORM 1: BLOG SIDEBAR FORM (Uses explicit type match) ---
            type: 'BLOG_SIDEBAR',
            slugs: [],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/BlogDetailPage/formperma/mgvhc7pg0i_9ypjsyAhQqnD4vnIuZusObkrMNZ5f6yk/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                course: 'Dropdown',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            },
            redirectUrl: '/thank-you-blog', // <-- Unique thank-you page for blog sidebar
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
                course: 'Dropdown',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            },
            redirectUrl: '/thank-you-curriculum', // <-- Unique thank-you page for curriculum pages
        },
        {
            type: 'Tests', // Optional type for completeness
            slugs: [
                "/act-tutors-in-dubai",
                "/advanced-placements-tutors-in-dubai"
            ],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Tests/formperma/8zcXiMlEz_lXvS_IJxAtMq7Rta3AT8-bwNe_rllPvJg/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                course: 'Dropdown',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            },
            redirectUrl: '/thank-you-curriculum', // <-- Unique thank-you page for curriculum pages
        },
        {
            type: 'Freedemo', // Optional type for completeness
            slugs: [
                "/act-tutors-in-dubai",
                "/advanced-placements-tutors-in-dubai"
            ],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Freedemo/formperma/KAwVRrjBN9gUy9u3j43gxKyKXGIc9361RYMOFY1MlcI/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                course: 'Dropdown',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            },
            redirectUrl: '/thank-you-freedemo', // <-- Unique thank-you page for curriculum pages
        },
        {
            type: 'Homeschooling', // Optional type for completeness
            slugs: [
                "/courses/homeschooling-tutors-in-dubai"
            ],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Homeschooling/formperma/bdx3_HZb5eCExd0eEaR-m3Cqfjo3i2VrFROA3E4oaYo/htmlRecords/submit',
            fieldMap: {
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                school: 'SingleLine1',
                course: 'Dropdown',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            },
            redirectUrl: '/thank-you-homeschooling', // <-- Unique thank-you page for curriculum pages
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
                course: 'Dropdown',
                message: 'MultiLine',
                pageinfo: 'SingleLine2',
            },
            redirectUrl: '/thank-you-subject', // <-- Unique thank-you page for subject pages
        },
        {
            type: 'CAREER_FORM', // Must match formType sent from CareerForm.jsx
            slugs: ['/careers'],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Career/formperma/5MGjIF4X7ef6W9KUqep6lOshMxA11LSyAx7Ub7300E4/htmlRecords/submit',
            fieldMap: {
                // Map API fields (from FormData) to Zoho field names
                name: 'SingleLine',
                email: 'Email',
                phone: 'PhoneNumber_countrycode',
                location: 'SingleLine1',      // Example mapping for Career fields
                department: 'SingleLine2',    // Example mapping
                position: 'SingleLine3',      // Example mapping
                subjects: 'SingleLine4',      // Example mapping
                job_type: 'Radio',            // Example mapping
                notice_period: 'SingleLine5', // Example mapping
                experience: 'SingleLine6',    // Example mapping
                pageinfo: 'SingleLine7',      // Example mapping
                cv_file: 'FileUpload1',       // CRITICAL: Zoho field for file upload (Check your Zoho form for the exact field name)
            },
            redirectUrl: '/thank-you-career', // <-- New thank-you page
        },
    ];
    // -----------------------------------------------------------------


    // --- 3. MATCH THE CURRENT PATH TO A CONFIGURATION (PRIORITIZING TYPE) ---
    let submittedFormConfig;

    if (formType) {
        // 1. Prioritize explicit type matching
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

    // Destructure redirectUrl from the matched configuration
    const { zohoUrl, fieldMap, redirectUrl } = submittedFormConfig;

    // --- 4. BUILD THE DYNAMIC ZOHO PAYLOAD ---
    const zohoPayload = new URLSearchParams();

    // Map the received data fields to Zoho's required field names (aliases)
    zohoPayload.append(fieldMap.name, name || '');
    zohoPayload.append(fieldMap.email, email || '');
    zohoPayload.append(fieldMap.phone, phone || '');

    // The school field is only defined for BLOG_SIDEBAR, Organic_Curriculum, and Organic_Subject
    if (fieldMap.school) {
        zohoPayload.append(fieldMap.school, school || '');
    }

    if (course && fieldMap.course) { // <--- ADDED: Course append logic
        zohoPayload.append(fieldMap.course, course);
    }

    // The curriculum field is only defined for POPUP_FORM
    if (curriculum && fieldMap.curriculum) {
        zohoPayload.append(fieldMap.curriculum, curriculum);
    }

    // Check if the form configuration has a message field before appending
    if (fieldMap.message) {
        zohoPayload.append(fieldMap.message, message || '');
    }

    // Check if the form configuration has a pageinfo field before appending
    if (fieldMap.pageinfo) {
        zohoPayload.append(fieldMap.pageinfo, pageinfo || '');
    }

    // 💡 NEW: Career Form Fields (Only appended if they exist in the fieldMap of the matched form)
    // ⚠️ NOTE: This code assumes career form data is submitted as URL-encoded text.
    // File upload (cv_file) requires a fundamental change to handle 'multipart/form-data'.
    if (fieldMap.location) {
        zohoPayload.append(fieldMap.location, location || '');
    }
    if (fieldMap.department) {
        zohoPayload.append(fieldMap.department, department || '');
    }
    if (fieldMap.position) {
        zohoPayload.append(fieldMap.position, position || '');
    }
    if (fieldMap.subjects) {
        zohoPayload.append(fieldMap.subjects, subjects || '');
    }
    if (fieldMap.job_type) {
        zohoPayload.append(fieldMap.job_type, job_type || '');
    }
    if (fieldMap.notice_period) {
        zohoPayload.append(fieldMap.notice_period, notice_period || '');
    }
    if (fieldMap.experience) {
        zohoPayload.append(fieldMap.experience, experience || '');
    }
    // The 'cv_file' field will NOT be submitted correctly here as it requires 'multipart/form-data'.


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
            // Return the dynamically determined redirect URL
            return res.status(200).json({
                success: true,
                message: 'Form submitted successfully to Zoho.',
                redirectUrl: redirectUrl // <-- This is the dynamic URL
            });
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