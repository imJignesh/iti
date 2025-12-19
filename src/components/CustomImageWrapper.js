// components/CustomImageWrapper.js

import NextImage from 'next/image'; // Import the original component as NextImage
import { useRouter } from 'next/router';
import { PAGE_DEFAULT_ALT_MAP, FALLBACK_ALT_TEXT } from '../../data/altConfig';
// Adjust the path to altConfig.js if your structure is different

// We name the function wrapper something descriptive internally
const CustomImageWrapper = ({ alt, ...props }) => {
    const router = useRouter();

    // 1. Get the current clean path from the Next.js router
    // We remove the query parameters but keep the base path (e.g., /about-us)
    const currentPath = router.pathname;

    // 2. Look up the required alt text from the configuration map
    // If the path is not found, use the defined FALLBACK_ALT_TEXT.
    const requiredAltText = PAGE_DEFAULT_ALT_MAP[currentPath] || FALLBACK_ALT_TEXT;

    // 3. The final alt text is the required alt text, which forcefully overrides 
    //    any 'alt' prop passed by the developer in the component usage.
    const finalAlt = requiredAltText;

    return (
        // Render the original Next.js Image component
        <NextImage
            // FORCE the alt text to the page-specific value
            alt={finalAlt}
            // Pass all other props (src, width, height, quality, etc.)
            {...props}
        />
    );
};

// EXPORT IT as the default. When you import it as 'Image', this is what you get.
export default CustomImageWrapper;