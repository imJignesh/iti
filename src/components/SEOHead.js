import Head from 'next/head';

export default function SEOHead({
    title = "Ignited Training Institute",
    description = "Expert tutoring in Dubai",
    preloadImages = []
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <link
                rel="preload"
                href="/images/logo.svg"
                as="image"
                type="image/svg+xml"
            />

            {preloadImages.map((img, idx) => (
                <link
                    key={idx}
                    rel="preload"
                    href={img.src}
                    as="image"
                    type={img.type || "image/webp"}
                />
            ))}
        </Head>
    );
}