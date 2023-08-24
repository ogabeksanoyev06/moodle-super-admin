import Vue from "vue";
import Vuex from "vuex";
import generalOptions from "./Modules/generalOptions";
import superAdmin from "./Modules/superAdmin";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalOptions,
    superAdmin,
  },
});
