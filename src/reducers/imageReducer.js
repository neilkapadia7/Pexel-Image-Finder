import { GET_PICS, SET_LOADING, GET_CURATED_PHOTOS, GET_PHOTO, REMOVE_PHOTO, REMOVE_CURATED_PHOTOS, GET_SEARCH_PHOTOS, REMOVE_SEARCH, SET_KEYWORD } from "../actions/types";

const initialState = {
    curated_photos: null,
    photo: null,
    searchPhotos: null,
    search: false,
    keyword: null,
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
        case GET_SEARCH_PHOTOS:
            return {
                ...state,
                search: true,
                searchPhotos: action.payload,
                loading: false
            }
        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        case REMOVE_SEARCH: 
            return {
                ...state,
                search: false,
                searchPhotos: null,
                keyword: null
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