export default {
  // render: function(createElement) {
  //   return createElement(
  //     // "h" + this.level,
  //     "div",
  //     { class: "input-field" }, // имя тега
  //     this.$slots.default // массив дочерних элементов
  //   );
  // },
  // props: {
  //   level: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  // render: function (createElement) {
  //   return createElement('div',
  //     Array.apply(null, { length: 6 }).map(function () {
  //       return createElement('label', 'Привет')
  //     })
  //   )
  // },

  // render: function(createElement) {
  //   return createElement(
  //     "div",
  //     [null].map(() => {
  //       return createElement("div", "Привет");
  //     })
  //   );
  // },
  // props: ["items"],

  // render: function(createElement) {
  //   return createElement(
  //     "div",
  //     [null].map(() => {
  //       return createElement(
  //         "div",
  //         [null].map(() => {
  //           return createElement("p", {}, "ho");
  //         }),
  //         " "
  //       );
  //     }),
  //     " "
  //   );
  // },

  // render: function(createElement) {
  //   return createElement(
  //     "div",
  //     Array.apply(null, { length: 5 }).map(function() {
  //       return createElement(items[2].name, "Привет");
  //     })
  //   );
  // },

  props: ["items"],
  render: function(createElement) {
    if (this.items.length) {
      return createElement(
        "div",
        this.items.map(function(item) {
          return createElement(item.name, item.name);
        })
      );
    } else {
      return createElement("p", "Ничего не найдено.");
    }
  },
  // data() {
  //   return {
  //     items: [
  //       { name: "h1" },
  //       { name: "h2" },
  //       { name: "h3" },
  //       { name: "h4" },
  //       { name: "h5" },
  //     ],
  //   };
  // },
};
