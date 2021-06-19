import {UserType} from "../HW8";

type ActionType = {
    type: string,
    payload: 'up' | 'down' | 18
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort((a, b) => a.name < b.name ? -1 : 1);
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            let newState = state.filter(el => el.age >= action.payload)
            return newState
        }
        default:
            return state
    }
}
