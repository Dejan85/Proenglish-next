import React, { useEffect } from "react";
import Head from "next/head";
import { Header, Footer } from "src/components/frontend";
import { Container } from "src/components/ui";
import useTitle from "src/hooks/title/useTitle";

const Layout = ({ children }) => {
  const { pageTitle } = useTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
