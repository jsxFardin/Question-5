// GET_TODO(state, todo){
//     state.newTodo = todo
//   },
//   ADD_TODO(state){
//     state.todos.push({
//       body: state.newTodo,
//       completed: false
//     })
//   },
//   EDIT_TODO(state, todo){
//      var todos = state.todos
//      todos.splice(todos.indexOf(todo), 1)
//      state.todos = todos
//      state.newTodo = todo.body
//   },
//   REMOVE_TODO(state, todo){
//      var todos = state.todos
//      todos.splice(todos.indexOf(todo), 1)
//   },
//   COMPLETE_TODO(state, todo){
//     todo.completed = !todo.completed
//   },
//   CLEAR_TODO(state){
//     state.newTodo = ''
//   }
