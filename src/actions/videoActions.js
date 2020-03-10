import { 
    SET_LOADING, 
    GET_VIDEOS, 
    GET_VIDEO,
    REMOVE_VIDEO
} from './types';
import axios from 'axios';

export const getVideos = id => async dispatch => {
    try {
        setLoading();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '563492ad6f917000010000019e097cd5d9fa44e391a6f3cc5ae3054d'
            }
        }

        const res = await axios.get(`https://api.pexels.com/videos/popular?per_page=15&page=${id}`, config);
        dispatch({ type: GET_VIDEOS, payload: res.data});
    } 
    catch (err) {
        console.log(err);
    }
}
export const getVideo = id => async dispatch => {
    try {
        setLoading();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '563492ad6f917000010000019e097cd5d9fa44e391a6f3cc5ae3054d'
            }
        }

        const res = await axios.get(`https://api.pexels.com/videos/videos/${id}`, config);
        dispatch({ type: GET_VIDEO, payload: res.data});
    } 
    catch (err) {
        console.log(err);
    }
}

export const removeVideo  = () => {
    return {
        type: REMOVE_VIDEO
    }
}

const setLoading = () => {
    return {
        type: SET_LOADING
    }
}