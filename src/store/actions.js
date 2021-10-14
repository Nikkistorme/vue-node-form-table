import Vue from 'vue';

const getEntries = ({ commit }) => {
  return new Promise((resolve, reject) => {
    console.log("Begin getEntries");
    commit("setStatus", "loading");
    Vue.http.get("http://localhost:3000/entry")
      .then(res => {
        console.log("getEntries success");
        commit("setEntries", res.body);
        commit("setStatus", "ready");
        resolve(res.body);
      })
      .catch(error => {
        console.log("getEntries failure");
        console.log("error", error);
        reject(error);
      });
  });
}

const postEntry = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    console.log("Begin postEntry");
    commit("setStatus", "loading");
    Vue.http.post("http://localhost:3000/entry", payload)
      .then(res => {
        console.log("postEntry success");
        commit("addEntry", res.body)
        commit("setStatus", "ready");
        resolve(res.body);
      })
      .catch(error => {
        console.log("postEntry failure");
        console.log("error", error);
        reject(error);
      });
  });
};

export default {
  getEntries,
  postEntry
};
