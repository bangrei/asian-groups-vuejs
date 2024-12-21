import { createStore } from "vuex";

export default createStore({
  state: {
    sumoSchedulerURL:
      "https://hejazfs.my.site.com/SUMOScheduler/apex/sumoapp__onlinescheduler?processId=a2kW2000000BHlVIAW&isIframe=true",
    clientPortalURL: "https://hejazfs.my.site.com/",
  },
  mutations: {
    setSumoSchedulerURL(state, payload) {
      state.sumoSchedulerURL = payload;
    },
  },
  actions: {
    setSumoSchedulerURL({ commit }, payload) {
      commit("setSumoSchedulerURL", payload);
    },
  },
  getters: {
    getSumoSchedulerURL(state) {
      return state.sumoSchedulerURL;
    },
    getClientPortalURL(state) {
      return state.clientPortalURL;
    },
  },
});
