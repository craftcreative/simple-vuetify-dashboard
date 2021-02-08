
const defaultState = {
  status: "",
  token: localStorage.getItem("token") || "",
  // user: {}
};

//GETTERS
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
};

//MUTATIONS
const mutations = {
  auth_request(state){
    state.status= "loading";
  },
  auth_success(state, token) {
    state.status= "success";
    state.token= token;
  },
  auth_error(state){
    state.status = "error";
  },
  logout(state) {
    (state.status = ""), (state.token = "");
  }
};

//ACTIONS
const actions = {
  login({commit}) {
    return new Promise((resolve) => {
      commit("auth_request");
      // AXIOS CALL
      const token = "testToken123"
      localStorage.setItem("token", token);
      commit("auth_success", token);
      resolve({token:"testToken123", code:"200"})
    });
  },
  logout({commit}){
    return new Promise((resolve) => {
      commit("logout");
      localStorage.removeItem("token")
      // AXIOS
      resolve()
    })
  }
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations
};
