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
                <Hero />
                <section className="container" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                    <p style={{ margin: 0, textAlign: "center", color: "var(--blue-color)", fontSize: "16px" }}>
                        PSI sandbox: hero-only baseline for performance testing.
                    </p>
                </section>
            </div>
        </>
    );
}
