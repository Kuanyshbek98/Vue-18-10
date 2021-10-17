<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo,i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
      />
      <li>Kyanyshbek</li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItems";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("removo-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>