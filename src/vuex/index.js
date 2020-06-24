export default {
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
        state.todos = [...state.todos, todo];
    },
    REMOVE_TODO(state, index) {
        state.todos.splice(index, 1);
    },
    COMPLETE_TODO(state, index) {
        state.todos[index].completed = !state.todos[index].completed;
    }
  },
  actions: {
      addTodo({commit}, todo){
        commit(`ADD_TODO`, todo)
      },
      removeTodo({commit}, index){
        commit(`REMOVE_TODO`, index)
      },
      completeTodo({commit}, index){
       commit(`COMPLETE_TODO`, index)
      }
  },
};
