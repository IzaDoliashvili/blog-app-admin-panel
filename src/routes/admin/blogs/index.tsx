import { ADMIN_PATHS } from "../index.enum";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const BlogsCreateView = lazy(
  () => import("../../../pages/blogs/blogs-page/blogs/views/create"),
);

const BlogsListView = lazy(
  () => import("../../../pages/blogs/blogs-page/blogs/views/list"),
);

const BlogsUpdateView = lazy(
  () => import("../../../pages/blogs/blogs-page/blogs/views/update"),
);

export const BLOG_ROUTES = [
  <Route
    path={ADMIN_PATHS.BLOG_LIST}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsListView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.BLOG_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsCreateView />
      </Suspense>
    }
  />,
  <Route
    path={ADMIN_PATHS.BLOG_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsUpdateView />
      </Suspense>
    }
  />,
];