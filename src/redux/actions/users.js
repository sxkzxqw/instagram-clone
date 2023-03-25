import { api } from "../../api";
import { getAuthorizedUserSuccess, getUserFailed, getUserStarted, getUserSuccess } from '../actionCreators/users';

export const getUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(getUserStarted());
            const response = await api.users.getUser(id)

            dispatch(getUserSuccess(response.data))
        } catch (error) {
            dispatch(getUserFailed(error))
        }
    }
}

export const getAuthorizedUser = () => {
    return async (dispatch) => {
        try {
            dispatch(getUserStarted());
            const response = await api.users.getUser()

            dispatch(getAuthorizedUserSuccess(response.data))
        } catch (error) {
            dispatch(getUserFailed(error))
        }
    }
}