import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    switch1:false,
    progress:false,
    chapterBtnDialog: false,
    fab: false,
    dark: false,
    page: 7,
    num: 0,
    user: "",
    comicViewBtnFlag: true,
    // showIndexTab:true,
    searchResult: "",
    comicDetail: "",
    comicChapter: "",
    comicContent: "",
    categoryContent: "",
    loading: false,
    prevLoading:false,
    nextLoading:false
  },
  mutations: {
    setSearchResult(state, val) {
      this.state.searchResult = val;
    },
    setComicDetail(state, val) {
      this.state.comicDetail = val;
    },
    setComicChapter(state, val) {
      this.state.comicChapter = val;
    }
    // setComicContent(state, val) {
    //   this.state.comicContent = val
    // }
  }
});
