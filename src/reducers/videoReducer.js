import { SET_LOADING, GET_VIDEOS, GET_VIDEO, REMOVE_VIDEO } from "../actions/types"


const initialState = {
    popularVideos: null,
    singleVideo: null,
    loading: false,
    error: null 
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOS:
            return {
                ...state,
                popularVideos: action.payload,
                loading: false
            }
        case GET_VIDEO:
            return {
                ...state,
                singleVideo: action.payload,
                loading: false
            }
        case REMOVE_VIDEO: 
            return {
                ...state,
                singleVideo: null
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