import React, { useEffect } from "react";
import RenderUi from "./partials/RenderUi";
import { useInjectReducer } from "src/utils/injectReducer";
import { useInjectSaga } from "src/utils/injectSaga";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "src/components/frontend/home/blog/selectors";
import { BLOG_SCOPE } from "./constants";
import {
  reducer,
  fetchBlogData,
} from "src/components/frontend/home/blog/slice";
import saga from "src/components/frontend/home/blog/saga";

const Blog = () => {
  useInjectReducer({ key: BLOG_SCOPE, reducer });
  useInjectSaga({ key: BLOG_SCOPE, saga });
  const dispatch = useDispatch();
  const { blogData } = useSelector(getBlogData);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
  }, [blogData.length, dispatch]);

  return <RenderUi blogData={blogData} />;
};

export default Blog;
