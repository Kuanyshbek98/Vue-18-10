export default {
  //try, catch-gloval
  install(Vue) {
    Vue.prototype.$load = async (action, errHandler) => {
      try {
        await action();
      } catch (error) {
        console.log("-->" + error);
        if (errHandler) {
          errHandler();
        } else {
          console.log(error.response.data);
        }
      }
    };
  },
};