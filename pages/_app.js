import "../styles/globals.css";

import { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import config from "../config.json";

const Content = ({ children }) => (
  <div className="flex items-center justify-between w-full my-5">
    <div className="lg:w-7/12 mx-auto">{children}</div>
  </div>
);

const App = ({ Component, pageProps }) => (
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
  </Fragment>
);

export default App;
