import { GET_PICS, SET_LOADING, GET_CURATED_PHOTOS, GET_PHOTO, REMOVE_PHOTO, REMOVE_CURATED_PHOTOS } from "../actions/types";

const initialState = {
    curated_photos: null,
    photo: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CURATED_PHOTOS:
            return {
                ...state,
                curated_photos: action.payload,
                loading: false
            }
        case GET_PHOTO:
            return {
                ...state,
                photo: action.payload,
                loading: false
            }
        case REMOVE_CURATED_PHOTOS: {
            return{
                ...state,
                curated_photos: null
            }
        }
        case REMOVE_PHOTO:
            return {
                ...state,
                photo: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
             return state;
    }
}