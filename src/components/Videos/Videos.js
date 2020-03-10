import React, {useEffect, useState, Fragment} from 'react';
import VideoItem from './VideoItem';
import {getVideos} from '../../actions/videoActions';
import {connect} from 'react-redux';

const Videos = ({video: {popularVideos, loading},getVideos}) => {
    const [id, setId] = useState(1);

    useEffect(() => {
        getVideos(id)

        // eslint-disable-next-line 
    }, [id]);

    if(loading || popularVideos === null) {
        return <h4>Loading....</h4>
    }

    return (
        <div className='img-gallery-div'>
            {popularVideos.videos.map( video =>
                <VideoItem key={video.id} video={video} />
              )
            }
            <div>
                {id === 1
                    ? <p onClick={() => setId(id + 1)} style={{cursor: 'pointer'}}>Next</p>
                    : <Fragment>
                        <p onClick={() => setId(id + 1)} style={{cursor: 'pointer'}}>Next</p>
                        <p onClick={() => setId(id - 1)} style={{cursor: 'pointer'}}>Prev</p>
                      </Fragment>
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    video: state.video
});

export default connect(mapStateToProps, {getVideos})(Videos);
