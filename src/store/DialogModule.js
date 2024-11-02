export default {
  state: {
    isOpen: false,
  },
  mutations: {
    openDialog(state) {
      state.isOpen = true;
    },
    closeDialog(state) {
      state.isOpen = false;
    },
  },
};
