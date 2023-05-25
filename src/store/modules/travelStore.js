import { listTravel, getTravel } from "@/api/travel";

const travelStore = {
  namespaced: true,
  state: {
    travels: [],
    travel: null,
    detail: null,
  },
  getters: {
    thumbnail: (state) => {
      if (state.travel.thumbnail === null || state.travel.thumbnail === undefined) {
        return require("@/assets/img/bg-profile.jpg");
      } else {
        return state.travel.thumbnail;
      }
    },
  },
  mutations: {
    CLEAR_TRAVEL(state) {
      state.travels = [];
      state.travel = null;
    },
    SET_TRAVEL_LIST(state, travels) {
      state.travels = travels;
    },
    SET_SINGLE_TRAVEL(state, travel) {
      state.travel = travel;
    },
    SET_TRAVEL_DETAIL(state, detail) {
      state.detail = detail;
    },
  },
  actions: {
    clearTravel({ commit }) {
      commit("CLEAR_TRAVEL");
    },
    getTravelList({ commit }, userId) {
      listTravel(
        userId,
        ({ data }) => {
          commit("SET_TRAVEL_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setSingleTravel: ({ commit }, travel) => {
      commit("SET_SINGLE_TRAVEL", travel);
    },
    getTravelDetail: ({ commit }, travelId) => {
      getTravel(
        travelId,
        ({ data }) => {
          commit("SET_TRAVEL_DETAIL", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default travelStore;
