const state = {
  windowWidth: null,
  loading: false,
  faculty_type: [],
  faculty: [],
  refreshTokenIntervalId: null,
};

const getters = {
  windowWidth: (state) => state.windowWidth,
  loading: (state) => state.loading,
  faculty_type: (state) => state.faculty_type,
  faculty: (state) => state.faculty,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
  setFaculty_type: (state, data) => (state.faculty_type = data),
  setFaculty: (state, data) => (state.faculty = data),
  setLoading: (state, data) => (state.loading = data),
};
const actions = {
  getFacultyType({ commit }) {
    this._vm.$http.get("faculty_type").then((res) => {
      if (res) {
        commit("setFaculty_type", res);
      }
    });
  },
  getFaculty({ commit }) {
    this._vm.$http.get("faculty").then((res) => {
      if (res) {
        commit("setFaculty", res);
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
