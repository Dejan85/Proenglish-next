import { useInjectReducer } from "src/utils/injectReducer";
import { useInjectSaga } from "src/utils/injectSaga";
import { useDispatch, useSelector } from "react-redux";
import { getTitleState } from "./selectos";
import { TITLE_SCOPE } from "./constants";
import { reducer, setPageTitleAction } from "./slice";
import saga from "./saga";

const useTitle = () => {
  useInjectReducer({ key: TITLE_SCOPE, reducer });
  useInjectSaga({ key: TITLE_SCOPE, saga });
  const dispatch = useDispatch();
  const { pageTitle } = useSelector(getTitleState);

  const setTitleHandler = (titleProps) => {
    dispatch(setPageTitleAction(titleProps));
  };

  return {
    setTitleHandler,
    pageTitle,
  };
};

export default useTitle;
