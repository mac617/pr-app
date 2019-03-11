import Home from "./views/home.vue";
import Search from "./views/search.vue";
import Login from "./views/login.vue";
import Comic from "./views/comic.vue";
import ComicView from "./views/comicView.vue";
import SignUp from "./views/signUp.vue";
import Collect from "./views/collect.vue";
import History from "./views/history.vue";
import Category from "./views/category.vue";
import Test2 from "./views/test2.vue";
// import Test3 from "./views/test3.vue";
import DevLop from "./views/devLog.vue";
import About from "./views/about.vue";
import notFound from "./views/notFound.vue";
export default {
  // mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/collect",
      component: Collect
    },
    {
      path: "/signUp",
      component: SignUp
    },
    {
      path: "/comic/:bookUrl",
      component: Comic
    },
    {
      path: "/comicView/:comicNo/:chapterNo",
      component: ComicView
    },
    {
      path: "/history",
      component: History
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/devLop",
      component: DevLop
    },
    {
      path: "/about",
      component: About
    },
    { path: "*", component: notFound },
    {
      path: "/test2",
      component: Test2
    },
    // {
    //   path: "/test3",
    //   component: Test3
    // },
  ]
};
