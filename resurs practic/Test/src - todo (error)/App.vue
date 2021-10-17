<template>
  <div id="app">
    <h1>Todo appLication</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <AddTodo @add-todo="addTodo" />
    <ToDOList v-bind:todos="todos" @removo-todo="removeTodo" />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import ToDOList from "@/components/TodoLists";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Купит хлеб", completed: false },
        { id: 2, title: "Купит масло", completed: false },
        { id: 3, title: "Купит яйцо", completed: false },
      ],
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    ToDOList,
    AddTodo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
