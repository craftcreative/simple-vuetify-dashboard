import axios from "axios";

const defaultState = {
  status: "",
  token: localStorage.getItem("token") || "",
  user:  localStorage.getItem("user") || {}
};

//GETTERS
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
};

//MUTATIONS
const mutations = {
  auth_request(state){
    state.status= "loading";
  },
  auth_success(state, response) {
    state.status= "success";
    state.token= response.token;
    state.user = response.user;
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
  login({commit}, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      //const token = spotify.access_token;
      axios.post("/api/users/login", user)
      .then(resp => {
        const token = resp.data.sid;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = 'Bearer '+ token;
        axios.get("http://localhost:4000/api/user/account").then(resp =>{
            localStorage.setItem("token", token);
          commit("auth_success", {"token": token, "user": resp.data});
          resolve({token:token, code:"200"});
        })
      }).catch(err => {
        commit("auth_error");
        localStorage.removeItem("token")
        reject(err);
      });
    });
  },

  logout({commit}){
    return new Promise((resolve) => {
      commit("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axios.defaults.headers.common["Authorization"];
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
