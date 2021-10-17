export default function(instance) {
  return {
    signIn(payload) {
      return instance.post('auth/sign_in', payload)
    },
    signUp(payload) {
      return instance.post('auth/sign_up', payload)
    },
    logout() {
      return instance.delete('auth/logout')
    }
  }
}