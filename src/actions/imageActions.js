import { 
    ERROR, 
    SET_LOADING, 
    GET_CURATED_PHOTOS, 
    GET_PHOTO,
    REMOVE_PHOTO,
    REMOVE_CURATED_PHOTOS
} from './types';
import axios from 'axios';


export const getCuratedPhotos = id => async dispatch => {
    try {
        removeCuratedPhotos();
        setLoading();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '563492ad6f917000010000019e097cd5d9fa44e391a6f3cc5ae3054d'
            }
        }

        const res = await axios.get(`https://api.pexels.com/v1/curated?per_page=15&page=${id}`, config);

        dispatch({ type: GET_CURATED_PHOTOS, payload: res.data});
    } 
    catch (err) {
        console.log(err);
        // dispatch({type: ERROR, payload: err.response});    
    }
}

export const getPhoto = id => async dispatch => {
    try {
        setLoading();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '563492ad6f917000010000019e097cd5d9fa44e391a6f3cc5ae3054d'
            }
        }

        const res = await axios.get(`https://api.pexels.com/v1/photos/${id}`, config);

        dispatch({ type: GET_PHOTO, payload: res.data});
    } 
    catch (err) {
        console.log(err);
        // dispatch({type: ERROR, payload: err.response});    
    }
}

const removeCuratedPhotos = () => {
    return {
        type : REMOVE_CURATED_PHOTOS
    }
}

export const removePhoto = () => {
    return {
        type: REMOVE_PHOTO
    }
} 

const setLoading = () => {
    return{
        type: SET_LOADING
    }
}