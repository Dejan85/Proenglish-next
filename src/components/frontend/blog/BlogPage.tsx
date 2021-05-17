import React, { useEffect } from "react";
import { useInjectReducer } from "src/utils/injectReducer";
import { useInjectSaga } from "src/utils/injectSaga";
import { useSelector, useDispatch } from "react-redux";
import { getBlogData } from "src/components/frontend/home/blog/selectors";
import { BLOG_SCOPE } from "./constants";
import {
  reducer,
  getOneBlogAction,
  fetchBlogData,
} from "src/components/frontend/home/blog/slice";
import saga from "src/components/frontend/home/blog/saga";
import RenderOneBlogPage from "./partials/RenderOneBlogPage";
import { Loading } from "src/components/ui";
import { useRouter } from "next/router";

const BlogPage = (props: any): JSX.Element => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { match } = props;
  const { blogData, oneBlogData } = useSelector(getBlogData);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, []);

  useEffect(() => {
    dispatch(getOneBlogAction(router.query.id));
  }, [blogData]);

  return oneBlogData?.length ? (
    <RenderOneBlogPage oneBlogData={oneBlogData} />
  ) : (
    <Loading height="100vh" />
  );
};

export default BlogPage;
