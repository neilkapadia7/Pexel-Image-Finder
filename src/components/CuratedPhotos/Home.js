import React, {useEffect, useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import CuratedItem from './CuratedItem';

import { getCuratedPhotos } from '../../actions/imageActions';
import {connect} from 'react-redux';

const Home = ({ images: {curated_photos, loading}, getCuratedPhotos}) => {
    const [curPage, setCurPage] = useState(1);
    // const [rows, setRows] = useState([]);

    useEffect(() => {
        getCuratedPhotos(curPage);
        console.log(curPage);

        // eslint-disable-next-line
    }, [curPage]);
    
    if(loading || curated_photos === null) {
        return <h3>Loading...</h3>
    }
    if(loading) {
        return <h3>Loading...</h3>
    }

    // const pagination = () => {
    //     for(let i = curPage; i <= curPage+19; i++) {
    //         rows.push(i)
    //     }
    // }
    
    const Next = () => {
        setCurPage(curPage + 1)
    }

    const Previos = () => {
        setCurPage(curPage - 1)
    }

    return (
        <div>
            <h1>Pexel API</h1>
            <div className='img-gallery-div'>
                {curated_photos.photos.map(photo => 
                    <CuratedItem key={photo.id} photo={photo} />    
                )}
            </div>
            
            <center>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {/* {}
                    {rows.map(row => 
                          <p onClick={() => setCurPage(row, () => console.log('Hello'))} key={row} style={{margin: 7}}>{row}</p>    
                    )} */}

                    {
                    curPage === 1
                        ? <p className='next' onClick={Next}>Next</p>
                        : 
                          <Fragment>
                            <p className='next' onClick={Previos}>Previous</p>
                            <p className='next' onClick={Next}>Next</p>
                          </Fragment>
                    }
                </div>
            </center>
        </div>
    )
}


Home.propTypes = {
    images: PropTypes.object.isRequired,
    getCuratedPhotos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    images: state.images
});

export default connect(mapStateToProps, {getCuratedPhotos})(Home);
