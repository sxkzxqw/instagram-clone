import { GET_AUTHORIZED_USER_SUCCESS, GET_USER_FAILED, GET_USER_STARTED, GET_USER_SUCCESS } from "../actionCreators/users";

const initialState = {
    user: {},
    isUserLoading: false,
    authorizedUser: {},
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_STARTED:
            return {
                ...state,
                isUserLoading: true,
            }

        case GET_USER_SUCCESS: 
        return {
            ...state,
            isUserLoading: false,
            user: action.payload
        }

        case GET_USER_FAILED: 
        return {
            ...state,
            isUserLoading: false,
        }

        case GET_AUTHORIZED_USER_SUCCESS:
            return {
                ...state,
                isUserLoading: false
            }
    
        default:
            return { ...state }
    }
}