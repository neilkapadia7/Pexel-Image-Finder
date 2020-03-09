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
        <div>
            {search ? <Redirect to={`/search`} /> : ''} 
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Search Photos' onChange={e => setSearchField(e.target.value)} value={searchField} name='searchField'/>
                <input type='submit' value='Search' />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    images: state.images
});

export default connect(mapStateToProps, {getSearch})(Search);
