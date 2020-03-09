import { combineReducers } from "redux";
import imageReducer from './imageReducer';
import videoReducer from './videoReducer';

export default combineReducers({
    images: imageReducer,
    video: videoReducer
});