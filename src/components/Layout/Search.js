import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import {getSearch} from '../../actions/imageActions';
import {connect} from 'react-redux';

const Search = ({images: {search, keyword}, getSearch}) => {
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        if(keyword === null) {
            setSearchField('');
        }

        // eslint-disable-next-line
    }, [keyword]);

    const onSubmit = e => {
        e.preventDefault();
        if(searchField === '') {
            console.log('Search Field is Empty');
        }
        else{
            var keyword = searchField;
            var i = 0;
            for(i; i < keyword.length; i++) {
                keyword = keyword.replace(" ", "+");
            }
            getSearch(keyword);
        }
    }

    return (
        <div className='search-div'>
            {search ? <Redirect to={`/search`} /> : ''} 
            <h2 className='search-title'>The best free stock photos &amp; videos shared by talented creators.</h2>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Search for free photos' onChange={e => setSearchField(e.target.value)} value={searchField} name='searchField' required/>
                <i className="fas fa-search" type='submit'></i>
            </form>
            <p className='suggested'><span style={{fontWeight: 400}}>Suggested:</span> city,  beach,  street,  new york,  nature,  greeting,  more</p>
        </div>
    )
}

const mapStateToProps = state => ({
    images: state.images
});

export default connect(mapStateToProps, {getSearch})(Search);
