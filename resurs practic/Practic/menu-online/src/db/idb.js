const DB_NAME = 'menudb'
const STORAGE_NAME = 'basket'
const DB_VERSION = 1
let DB

export default {

  async getDb() {
    return new Promise((resolve, reject) => {

      if(DB) { return resolve(DB) }
      let request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = () => {
        reject('Error')
      }

      request.onsuccess = e => {
        DB = e.target.result
        resolve(DB)
      }

      request.onupgradeneeded = e => {
        let db = e.target.result
        db.createObjectStore(STORAGE_NAME, { autoIncrement: true, keyPath:'id' })
      }
    })
  },
  async deleteProduct(product) {

    let db = await this.getDb()

    return new Promise(resolve => {

      let trans = db.transaction([STORAGE_NAME],'readwrite')
      trans.oncomplete = () => {
        resolve()
      };

      let store = trans.objectStore(STORAGE_NAME)
      store.delete(product.id)
    });
  },
  async getProducts() {

    let db = await this.getDb();

    return new Promise(resolve => {

      let trans = db.transaction([STORAGE_NAME],'readonly')
      trans.oncomplete = () => {
        resolve(products)
      };

      let store = trans.objectStore(STORAGE_NAME);
      let products = [];

      store.openCursor().onsuccess = e => {
        let cursor = e.target.result
        if (cursor) {
          products.push(cursor.value)
          cursor.continue()
        }
      }

    })
  },

  async saveProduct(product) {

    let db = await this.getDb()

    return new Promise(resolve => {

      let trans = db.transaction([STORAGE_NAME],'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore(STORAGE_NAME)
      const cursorRequest = store.openCursor(product.id)


      store.put(product)
      cursorRequest.onsuccess = e => {
        const cursor = e.target.result
        if (cursor && +cursor.value.id === +product.id) {
          const invoice = cursor.value
          invoice.count += product.count
          const updateRequest = cursor.update(invoice)

          cursor.continue()
        }
      }

    });

  },

  async editProduct(product) {

    let db = await this.getDb()

    return new Promise(resolve => {

      let trans = db.transaction([STORAGE_NAME],'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore(STORAGE_NAME)
      const cursorRequest = store.openCursor(product.id)


      store.put(product)

    });

  },

  async deleteAll() {
    let db = await this.getDb()
    return new Promise(resolve => {

      let trans = db.transaction([STORAGE_NAME],'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      let store = trans.objectStore(STORAGE_NAME)
      store.clear()
    })
  }

}
