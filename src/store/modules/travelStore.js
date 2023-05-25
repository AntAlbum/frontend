const travelStore = {
  namespaced: true,
  state: {
    travel: null,
  },
  getters: {
    thumbnail: state => {
      if (state.travel.thumbnail === null || state.travel.thumbnail === undefined) {
        return require("@/assets/img/bg-profile.jpg");
      } else {
        return state.travel.thumbnail;
      }
    }
  },
  mutations: {
    CLEAR_TRAVEL(state) {
      state.travel = null;
    },
    SET_DETAIL_TRAVEL(state, travel) {
      state.travel = travel;
    }
  },
  actions: {
    detailTravel: ({ commit }, travel) => {
      commit("SET_DETAIL_TRAVEL", travel);
    },
  },
};

export default travelStore;
