const initState = {
    isLoading: false
}
export type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: loadingActionType): initStateType => {
    switch (action.type) {
        case 'PRELOADER': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}
export type loadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean): {type: 'PRELOADER', isLoading: boolean} => ({
    type: 'PRELOADER', isLoading
} as const)
