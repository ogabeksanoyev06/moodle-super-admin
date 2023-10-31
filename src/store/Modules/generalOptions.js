const state = {
  windowWidth: null,
  loading: false,
  faculty_type: [],
  faculties: {},
  department: {},
  educationYear: {},
  refreshTokenIntervalId: null,
};

const getters = {
  windowWidth: (state) => state.windowWidth,
  loading: (state) => state.loading,
  faculties: (state) => state.faculties,
  department: (state) => state.department,
  faculty_type: (state) => state.faculty_type,
  educationYear: (state) => state.educationYear,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
  setFaculty_type: (state, data) => (state.faculty_type = data),
  setFaculty: (state, data) => (state.faculties = data),
  setDepartment: (state, data) => (state.department = data),
  setEducationYear: (state, data) => (state.educationYear = data),
  setLoading: (state, data) => (state.loading = data),
};
const actions = {
  getFacultyType({ commit }) {
    this._vm.$http.get("faculty_type").then((res) => {
      if (res) {
        commit("setFaculty_type", res.results);
      }
    });
  },
  async getFaculty({ commit }, payload) {
    await this._vm.$http.get(`faculty/?limit=${payload}`).then((res) => {
      if (res && res.results) {
        const responseData = {
          count: res.count,
          page_count: res.page_count,
          next: res.next,
          previous: res.previous,
          results: res.results,
        };
        commit("setFaculty", responseData);
      }
    });
  },
  async getDeparments({ commit }, payload) {
    await this._vm.$http.get(`department/?limit=${payload}`).then((res) => {
      if (res && res.results) {
        const responseData = {
          count: res.count,
          page_count: res.page_count,
          next: res.next,
          previous: res.previous,
          results: res.results,
        };
        commit("setDepartment", responseData);
      }
    });
  },
  async getEducationYear({ commit }, payload) {
    try {
      const endpoint = `educationyear${
        payload ? `/?limit=20&page_number=${payload.number}` : ""
      }`;
      const res = await this._vm.$http.get(endpoint);
      if (res && res.results) {
        const responseData = {
          count: res.count,
          page_count: res.page_count,
          next: res.next,
          previous: res.previous,
          results: res.results,
        };
        commit("setEducationYear", responseData);
      }
    } catch (error) {
      //
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
