import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexSessionStorage = new VuexPersist({
  key: 'vuex',
  storage: window.sessionStorage,
  reducer: (state) => ({
    patientOrderData: state.patientOrderData,
    currentPageData: state.currentPageData,
    loginInfo: state.loginInfo,
  }),
});

export default new Vuex.Store({
  state: {
    version: 'Build 1.1',
    todayDate: new Date(),
    spinner: false,
    screenLock: false,
    loginInfo: {
      userId: '',
      userName: '',
      firstName: '',
      lastName: '',
      token: '',
      isLoggedIn: false,
    },
  },
  plugins: [vuexSessionStorage.plugin],
  getters: {
    getApplicationVersion(state) {
      return state.version;
    },

    screenLock: (state) => {
      return state.screenLock;
    },
    spinner: (state) => {
      return state.spinner;
    },
    getLoginInfo: (state) => {
      return state.loginInfo;
    },
  },
  actions: {
    versionAction(context) {
      context.commit('setApplicationVersion', this.state.version);
    },
    loginInfoAction: (context, userData) =>
    {
      context.commit('setLoginInfo', userData);
    },
  },
  mutations: {
    setApplicationVersion(state, payload) {
      state.version = payload;
    },
    setSpinner: (state, spinner) => {
      state.spinner = spinner;
    },
    setScreenLock: (state, screenLock) => {
      state.screenLock = screenLock;
    },
    setLoginInfo: (state, payload) => {
      state.loginInfo = payload;
    },
  },
});
