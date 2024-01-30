import Script from "next/script";

import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {process.env.UMAMI_ENABLED === "true" ? (
          <Script
            strategy="lazyOnload"
            src={process.env.UMAMI_SCRIPT_URL}
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          />
        ) : null}
      </body>
    </Html>
  );
};

export default Document;
