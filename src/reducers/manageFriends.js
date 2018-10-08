export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.friend] }
      case 'REMOVE_FRIEND':
        const remove = state.friends.findIndex(friend => friend.id === action.id)
        return { ...state, friends: [...state.friends.slice(0,remove), ...state.friends.slice(remove+1)] }
    default:
      return state
  }
}
