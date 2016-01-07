export function addTodo(todo){
  return {
    type: 'ADD_TODO',
    todo
  }
}

export function deleteTodo(index){
  return {
    type: 'DELETE_TODO',
    index
  }
}
