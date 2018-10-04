export function manageFriends(state = initialState, action){
	
	switch(action.type) {
		case "ADD_FRIEND":
			return ({
				friends: [...state.friends, action.friend]
			})
		break;
		case "REMOVE_FRIEND":
			let newState = state.friends.filter(friend => friend.id !== action.id)
			return ({
				...state, friends: newState
			})

		default: 
			return state;

	}
}