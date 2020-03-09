import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SearchPhoto = ({photo}) => {
    const {id, src} = photo;

    return (
        <div className='gallery-image'>
            <Link to={`/photo/${id}`}>
                <img src={src.original} height='450px' width='100%' alt='Pexel Image'/>
            </Link>
        </div>
    )
}

SearchPhoto.propTypes = {
    photo: PropTypes.object.isRequired
}

export default SearchPhoto
