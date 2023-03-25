import { getPhotos, mutatePhoto } from './photos';
import { getUser, mutateUser } from './users';

export const api = {
    photos: {
        getPhotos,
    },
    users: {
        getUser,
        mutateUser,
    },
};