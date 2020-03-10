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
        return <center><h4 className='home-title'>Nothing in the Search Box</h4></center>
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
            {keyword ? <center><h3 className='home-title2'>Showing Results for:  <strong>{correctKeyword}</strong></h3></center> : <center><h3 className='home-title'>Nothing in the Search Box</h3></center>}

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
