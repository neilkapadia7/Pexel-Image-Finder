import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {getPhoto, removePhoto} from '../../actions/imageActions';
import {connect} from 'react-redux';

const Photo = props => {

    const {getPhoto, removePhoto, images: {photo, loading}} = props;

    useEffect(() => {
        getPhoto(props.match.params.id);

        return () => {
            removePhoto();
        }

        // eslint-disable-next-line
    }, []);

    if(loading || photo === null) {
        return <center><h1 className='home-title'>Loading...</h1></center>
    }

    const {url, photographer, photographer_url, photographer_id, src} = photo;

    return (
        <div className='main-image-div'>
            <div className='main-image'>
                <a href={url} target='_blank'>
                <img src={src.original} alt='Pexel Image'/>
                </a>
            </div>
            <div className='photographer-div'>
            Photographer : <a href={photographer_url} target='_blank' className='photographer-name'>{photographer}</a>
            </div>
        </div>
    )
}

Photo.propTypes = {
    getPhoto: PropTypes.func.isRequired,
    removePhoto: PropTypes.func.isRequired,
    images: PropTypes.object.isRequired
}   

const mapStateToProps = state => ({
    images: state.images
})

export default connect(mapStateToProps, {getPhoto, removePhoto})(Photo);
