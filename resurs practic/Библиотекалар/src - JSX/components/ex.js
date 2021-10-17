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

  props: ["items", "ides"],
  render: function(createElement) {
    var self = this;
    if (this.items.length) {
      return createElement(
        "div",
        { class: "input-field" },
        this.items.map(function(item) {
          if (item.name === "input") {
            return createElement("input", {
              domProps: {
                value: self.value,
              },
            });
          }
          if (item.name === "label") {
            return createElement(
              item.name,
              {
                domProps: {
                  id: "lastName",
                },
              },
              item.value
            );
          } else {
            return createElement(item.name, item.name);
          }
        })
      );
    } else {
      return createElement("p", "Ничего не найдено.");
    }
  },
  //
  // props: ["value"],
  // render: function(createElement) {
  //   var self = this;
  //   return createElement("input", {
  //     domProps: {
  //       value: self.value,
  //     },
  //     on: {
  //       input: function(event) {
  //         self.$emit("input", event.target.value);
  //       },
  //     },
  //   });
  // },
};
