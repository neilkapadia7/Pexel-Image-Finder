import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import {Link} from 'react-router-dom';

const CuratedItem = ({photo}) => {
    const {id, src} = photo;
    
    return (
        <div className='gallery-image'>
            <Link to={`/photo/${id}`}>
                <img src={src.original} height='100%' width='100%' alt='Pexel Image'/>
            </Link>
        </div>
    )
}

CuratedItem.propTypes = {
    photo: PropTypes.object.isRequired
}

export default CuratedItem;
