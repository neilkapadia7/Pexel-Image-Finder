import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import SearchPhoto from './SearchPhoto';

import {removeSearch} from '../../actions/imageActions';
import {connect} from 'react-redux';

const Search = props => {
    
    const {images :{keyword, search,searchPhotos}, removeSearch} = props;


    useEffect(() => {

        return () => {
            removeSearch();
        }
    }, []);
    
    if(searchPhotos === null || search === false ) {
        return <h4>Nothing in the Search Box</h4>
    }

    if(keyword){
        var correctKeyword = keyword;
        var i = 0;
        for(i; i < correctKeyword.length; i++) {
            correctKeyword = correctKeyword.replace("+", " ");
        }
    }
    return (
        <div>
            {keyword ? <h3>Showing Results for:  {correctKeyword}</h3> : 'Nothing in the Search Box'}

            <div className='img-gallery-div'>
                {searchPhotos.photos.map(photo => 
                    <SearchPhoto key={photo.id} photo={photo} />    
                )}
            </div>
        </div>
    )
}

Search.propTypes = {

}

const mapStateToProps = state => ({
    images: state.images
});

export default connect(mapStateToProps, {removeSearch})(Search);
