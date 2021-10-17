import instance from './instance'

import authModule from './auth'
import filmsModule from './films'

export default {
  auth: authModule(instance),
  films: filmsModule(instance)
}
