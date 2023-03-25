import { getPhotos } from "./photos"
import { getUser } from "./users"

export const api = {
    photos: {
        getPhotos,
    },
    user: {
        getUser,
    }
}