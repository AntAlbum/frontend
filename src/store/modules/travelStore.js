import { listTravel } from "@/api/travel";

const travelStore = {
  namespaced: true,
  state: {
    travels: [],
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
      state.travels = [];
      state.travel = null;
    },
    SET_TRAVEL_LIST(state, travels) {
      state.travels = travels;
    },
    SET_DETAIL_TRAVEL(state, travel) {
      state.travel = travel;
    }
  },
  actions: {
    getTravelList({ commit }, userId) {
      listTravel(userId, ({ data }) => {
        commit("SET_TRAVEL_LIST", data);
      }, (error) => {
        console.log(error);
      })
    },
    detailTravel: ({ commit }, travel) => {
      commit("SET_DETAIL_TRAVEL", travel);
    },
  },
};

export default travelStore;
