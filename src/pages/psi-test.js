import Head from "next/head";
import SEO from "@/components/SEO";
import Hero from "@/components/homeCopy/Hero";
export default function PsiTestPage() {

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <SEO
                title="PSI Test Page"
                description="Internal PSI test page for homepage performance experiments."
                url="https://ignitetraininginstitute.com/psi-test"
            />
            <div className="page-content-padding">
                <Hero showVideo={false} isPsiTestPage />
            </div>
        </>
    );
}
