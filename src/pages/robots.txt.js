const BASE_URL = 'https://ignitetraininginstitute.com'

const robotsContent = `User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/cache/
Disallow: /wp-content/upgrade/
Disallow: */feed/
Disallow: /xmlrpc.php
Allow: /*.js
Allow: /*.css
Allow: /wp-content/uploads/
Allow: /

User-agent: GPTBot
Disallow:

User-agent: OAI-SearchBot
Disallow:

User-agent: Google-Extended
Disallow:

User-agent: ClaudeBot
Disallow:

User-agent: PerplexityBot
Disallow:

User-agent: Amazonbot
Disallow:

User-agent: Applebot-Extended
Disallow:

User-agent: meta-externalagent
Disallow:

User-agent: Bytespider
Disallow:

User-agent: CCBot
Disallow:

User-agent: DuckDuckBot
Disallow:

Sitemap: ${BASE_URL}/sitemap.xml`

export async function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(robotsContent)
    res.end()

    return {
        props: {},
    }
}

export default function Robots() { }