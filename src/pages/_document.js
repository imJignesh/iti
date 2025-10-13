// pages/_document.js (Corrected)
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*
          Tags inside next/document's Head are static and apply to all pages.
          They CANNOT be overridden by next/head on individual pages.
          Keep only essential, non-overridable tags here.
        */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        {/* ... other essential links/preloads ... */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </Html>
  );
}