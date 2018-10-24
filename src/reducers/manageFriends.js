export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      const friendsCopy = [...state.friends]
      const friendToRemoveIndex = friendsCopy.findIndex(friend => friend.id === action.id)
      const newFriendsArray = friendsCopy.splice(friendToRemoveIndex, 1)
      return { ...state, friends: friendsCopy }
    default:
      return state;
  }
}
