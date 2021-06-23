import React, { useEffect } from "react";
import { useInjectSaga } from "src/utils/injectSaga";
import { useInjectReducer } from "src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getTitlesData } from "./selectors";
import { LAYOUT_SCOPE } from "./constants";
import { reducer, fetchTitlesData } from "./slice";
import saga from "./saga";
import Head from "next/head";
import { Header, Footer } from "src/components/frontend";
import { Container } from "src/components/ui";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  useInjectReducer({ key: LAYOUT_SCOPE, reducer });
  useInjectSaga({ key: LAYOUT_SCOPE, saga });
  const dispatch = useDispatch();
  const router = useRouter();
  const { titles } = useSelector(getTitlesData);

  useEffect(() => {
    if (!titles.length) dispatch(fetchTitlesData());
  }, [titles.length, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTitle = (): string => {
    const page = router.pathname.substr(1, router.pathname.length);

    return (
      (titles?.length &&
        titles.filter(
          (title: { page: string; title: string }) => title.page === page
        )[0]?.title) ||
      (titles?.length && titles[0].title) ||
      "Proenglish"
    );
  };

  return (
    <Container>
      <Head>
        <title>{handleTitle()}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="test description tag 160 characters"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
