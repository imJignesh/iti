import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/*
          * Hero LCP image preloads.
          * Mobile uses <source srcSet>, so we must use imageSrcSet (not href).
          * Chrome uses different cache keys for href vs srcSet resolution —
          * using href here causes a double-fetch and a 2–3s LCP penalty.
          * Desktop uses plain <img src>, so href is correct there.
          */}
        <link
          rel="preload"
          as="image"
          imageSrcSet="/images/video-cover-mobile.webp"
          imageSizes="100vw"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/video-cover.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />

        <link
          rel="preload"
          href="/images/logo.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="low"
        />



        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />



      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}