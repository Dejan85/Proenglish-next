import Head from "next/head";
import { Header } from "src/frontend";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Proenglish dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      {children}
    </>
  );
};

export default Layout;
