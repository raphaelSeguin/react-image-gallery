import React from 'react';
import Photo from './Photo.js'

const Gallery = ({photos, loading, noMatch}) => {
    return (
        <div className="photo-container">
            <h2>
                { // Loading and alert messages
                    loading
                        ? 'Loading...'
                        : noMatch
                            ? 'Sorry, I found nothing !'
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
