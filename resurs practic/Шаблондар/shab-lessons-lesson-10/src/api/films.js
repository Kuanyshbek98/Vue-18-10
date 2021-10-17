export default function(instance) {
  return {
    get(id) {
      return instance.get(`films/${id}`)
    },
    getAll() {
      return instance.get('films')
    }
  }
}