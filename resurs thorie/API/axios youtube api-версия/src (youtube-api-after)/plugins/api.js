import api from "../api/index"; 
// 1) link-head,headers,params
// 2) functions => link-footer, get,post
export default {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};
