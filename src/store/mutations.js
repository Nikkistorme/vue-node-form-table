const setStatus = (state, payload) => {
  state.status = payload;
};

const setEntries = (state, payload) => {
  state.entries = payload;
  console.log("🚀 ~ file: mutations.js ~ line 7 ~ addEntry ~ state.entries", state.entries)
};

const addEntry = (state, payload) => {
  state.entries.push(payload);
  console.log("🚀 ~ file: mutations.js ~ line 7 ~ addEntry ~ state.entries", state.entries)
};

export default {
  setStatus,
  setEntries,
  addEntry
};
