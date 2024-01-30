import "../styles/globals.css";

import Script from "next/script";

import { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import config from "../config.json";

const Content = ({ children }) => (
  <div className="flex items-center justify-between w-full my-5">
    <div className="lg:w-7/12 mx-auto">{children}</div>
  </div>
);

const App = ({ Component, pageProps }) => {
  console.log(process.env.UMAMI_ENABLED);
  return (
    <Fragment>
      <Navbar name={config.navbar.logotype} logo={config.navbar.logo} />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer
        repo={config.footer.repo}
        links={config.footer.links}
        license={config.footer.license}
        commitID={process.env.COMMIT_SHORT_SHA || "HEAD"}
      />
      {process.env.UMAMI_ENABLED ? (
        <Script
          strategy="beforeInteractive"
          src={process.env.UMAMI_SCRIPT_URL}
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      ) : null}
    </Fragment>
  );
};

export default App;
