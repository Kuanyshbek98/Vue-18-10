export default function(instance) {
  return {
    signIn(payload) {
      return instance.get("?_limit=16", payload);
    },
    signUp(payload) {
      return instance.post("?_limit=3", payload);
    },
    logout() {
      return instance.delete("?_limit");
    },
  };
}
