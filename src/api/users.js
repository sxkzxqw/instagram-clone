import {makeRequest} from './makeRequest'
const url = '/users'

export const getUser = (userId, config) => makeRequest({
    method: 'GET',
    url: `${url}/${userId}`,
    ...config
})