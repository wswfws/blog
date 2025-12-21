const AppRouter = {
  Index: "/",
  ArticleDetail: (slug: string) => `/articles/${slug}`,
}

export default AppRouter;