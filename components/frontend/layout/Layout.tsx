import React from "react";
import Head from "next/head";
import { Header, Footer } from "components/frontend";

const Layout = ({ children, title = "Proenglish" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
