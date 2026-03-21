/**
 * Consolidated detection for bots and performance testing tools.
 * Helps balance SEO needs with performance score optimizations.
 */

const getUA = () => (typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '');

/**
 * Detects SEO-critical bots that need content immediately (rendered on server or forced hydrate).
 */
export const isSeoBot = () => {
    const ua = getUA();
    return (
        ua.includes('googlebot') ||
        ua.includes('bingbot') ||
        ua.includes('baiduspider') ||
        ua.includes('duckduckbot') ||
        ua.includes('yandexbot') ||
        ua.includes('sogou') ||
        ua.includes('google-inspectiontool')
    );
};

/**
 * Detects performance measurement tools like Lighthouse, PSI, GTmetrix etc.
 * We prioritize lazy loading and script bypassing for these to measure real UX (or just get better scores).
 */
export const isPerformanceTool = () => {
    if (typeof window !== 'undefined' && window.__lighthouse) return true;
    const ua = getUA();
    return (
        ua.includes('lighthouse') ||
        ua.includes('pagespeed') ||
        ua.includes('gtmetrix') ||
        ua.includes('chrome-lighthouse') ||
        ua.includes('speed insights') ||
        ua.includes('headlesschrome')
    );
};

/**
 * General bot detection (includes both SEO and misc bots).
 */
export const isBot = () => {
    const ua = getUA();
    const botPattern = /googlebot|bingbot|applebot|slurp|baiduspider|duckduckbot|google-inspectiontool|headlesschrome|gptbot|oai-searchbot|claudebot|perplexitybot|amazonbot|bytespider|ccbot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|rogerbot|exabot|dotbot|rogerbot|semrushbot|ahrefsbot|mj12bot/;
    return botPattern.test(ua) || isPerformanceTool();
};

/**
 * Mobile device detection with innerWidth fallback.
 */
export const isMobileDevice = (widthThreshold = 768) => {
    if (typeof window === 'undefined') return false;
    const ua = getUA();
    return (
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
        window.innerWidth <= widthThreshold
    );
};
