import Head from "next/head";
import { Container } from "src/ui";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Proenglish dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Container>
  );
};

export default Layout;
