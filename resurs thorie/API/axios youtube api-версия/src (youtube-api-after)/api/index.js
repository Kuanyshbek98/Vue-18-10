import instance from "./instance"; // 1) link-head,headers,params
import authModule from "./auth"; // 2) functions => link-footer, get,post

export default {
  auth: authModule(instance),
};
