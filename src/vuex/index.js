export default {
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, todo) {
        state.todos = [...state.todos, todo];
    },
    // GET_TODO(state, todo) {
    //   state.newTodo = todo;
    // },

    // EDIT_TODO(state, todo) {
    //   var todos = state.todos;
    //   todos.splice(todos.indexOf(todo), 1);
    //   state.todos = todos;
    //   state.newTodo = todo.body;
    // },
    REMOVE_TODO(state, index) {
        state.todos.splice(index, 1);
    },
    COMPLETE_TODO(state, index) {
        state.todos[index].completed = !state.todos[index].completed;
    },
    // CLEAR_TODO(state) {
    //   state.newTodo = "";
    // },

  },
  actions: {
        getTodo({commit}, todo){
        commit(`GET_TODO`, todo)
      },
      addTodo({commit}, todo){
        commit(`ADD_TODO`, todo)
      },
      editTodo({commit}, todo){
        commit(`EDIT_TODO`, todo)
      },
      removeTodo({commit}, index){
        commit(`REMOVE_TODO`, index)
      },
      completeTodo({commit}, index){
       commit(`COMPLETE_TODO`, index)
      },
      clearTodo({commit}){
        commit('CLEAR_TODO')
      }
  },
};
