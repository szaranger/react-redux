import Immutable from 'immutable'

export default (state = Immutable.List(['Buy milk']), action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return state.unshift(action.todo)
    default:
      return state
  }
}
