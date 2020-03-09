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
        return <h3>Loading...</h3>
    }

    const {url, photographer, photographer_url, photographer_id, src} = photo;

    return (
        <div>
            <a href={url} target='_blank'><img src={src.original} height='450px' width='100%' alt='Pexel Image'/></a>
            <a href={photographer_url} target='_blank'><p>{photographer}</p></a>
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
