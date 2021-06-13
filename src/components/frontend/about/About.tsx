import React, { useEffect } from "react";
import { useInjectSaga } from "src/utils/injectSaga";
import { useInjectReducer } from "src/utils/injectReducer";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "./selectors";
import { ABOUT_SCOPE } from "./constants";
import { fetchAboutDataAction, reducer } from "./slice";
import saga from "./saga";
import RenderUi from "./partials/UiRender";
import useTitle from "src/hooks/title/useTitle";

const About = () => {
  useInjectReducer({ key: ABOUT_SCOPE, reducer });
  useInjectSaga({ key: ABOUT_SCOPE, saga });
  const dispatch = useDispatch();
  const { aboutData } = useSelector(getAboutData);
  const { setTitleHandler } = useTitle();

  useEffect(() => {
    dispatch(fetchAboutDataAction());
    setTitleHandler("About Title");
  }, []);

  return <RenderUi aboutData={aboutData} />;
};

export default About;
