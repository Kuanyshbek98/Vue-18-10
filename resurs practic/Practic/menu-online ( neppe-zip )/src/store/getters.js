let getters = {
  OPEN_DESCRIPTION: (state) => state.local.openDescription,
  PHONE: (state) => state.local.phone,
  TABLE_NUMBER: (state) => state.local.tableNumber,
  SOCKET: (state) => state.local.socket,
  SOCKET_CATCHER: (state) => state.local.socketCatcher,

  // ---------------------------------------------

  PRODUCTS: (state) => state.get.products,
  STORE: (state) => state.get.store,
  PRODUCT: (state) => state.get.product,
  ORDER: (state) => state.get.order,

  // ---------------------------------------------

  BASKET: (state) => state.basket.basket,
  ANIMATE_BASKET: (state) => state.basket.animateBasket,
}

export default getters
