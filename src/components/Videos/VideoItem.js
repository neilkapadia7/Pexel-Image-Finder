import React from 'react';

const VideoItem = ({video}) => {

    const {id, url, image} = video;

    return (
        <div className='gallery-image'>
            <video muted="" preload={image} height='450px' width='100%' style={{cursor: 'pointer'}}>
                <source src={url} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoItem;