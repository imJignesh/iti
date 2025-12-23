// components/CustomImageWrapper.js

import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { PAGE_DEFAULT_ALT_MAP, FALLBACK_ALT_TEXT } from '../../data/altConfig';

const CustomImageWrapper = ({ alt, ...props }) => {
    const router = useRouter();

    // 1. Get the current clean path
    const currentPath = router.pathname;

    // 2. Determine the fallback/required text for this page
    const pageDefaultAlt = PAGE_DEFAULT_ALT_MAP[currentPath] || FALLBACK_ALT_TEXT;

    /**
     * 3. LOGIC:
     * If 'alt' is provided by the developer (e.g. alt={`Trainer ${trainer.name}...`}), use it.
     * If 'alt' is missing, empty, or undefined, use the pageDefaultAlt.
     */
    const finalAlt = alt && alt.trim() !== "" ? alt : pageDefaultAlt;

    return (
        <NextImage
            // The order matters: we put alt AFTER {...props} to ensure 
            // our calculated finalAlt is the one that wins.
            {...props}
            alt={finalAlt}
        />
    );
};

export default CustomImageWrapper;