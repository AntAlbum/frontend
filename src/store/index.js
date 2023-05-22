import { createStore } from "vuex";
import userStore from "@/store/modules/userStore";

export default createStore({
  modules: {
    userStore,
  },
  state: {
    hideConfigButton: false,
    isPinned: true,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",

    userInfo: "",
  },
  getters: {
    getUserInfo(){
      return this.$store.state.userinfo;
    }
  },
  mutations: {
    UPDATE_USERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },

    TOGGLE_NAVIGATION_BAR(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
  },
  actions: {
    toggleNavbar() {
      this.commit("TOGGLE_NAVIGATION_BAR");
    },
  },
});
