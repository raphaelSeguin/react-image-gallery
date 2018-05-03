import React from 'react';
import Photo from './Photo.js'

const Gallery = ({photos, loading}) => {
    return (
        <div className="photo-container">
            <h2>
                {
                    loading
                        ? 'Loading...'
                        : 'Results'
                }
            </h2>
            <ul>
                {
                    photos.map( (url, i) => <Photo src={url} key={i}/> )
                }
            </ul>
        </div>
    )
}

export default Gallery;
