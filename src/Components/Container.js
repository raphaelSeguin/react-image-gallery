import React, {Component} from 'react';
import Gallery from './Gallery.js'

class Container extends Component {

    constructor({keyWord, apiKey}) {
        super();
        this.state = {
            loading: true,
            photosURL: [],
            noMatch: false
        };
        this.photosPerPage = 16
        this.keyWord = keyWord ;
        this.apiKey = apiKey;
    }

    queryFlickr() {
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&tags=${this.keyWord}&per_page=${this.photosPerPage}&format=json&nojsoncallback=1`;
        fetch(url)
            .then( res => res.json() )
            .then( data => data.photos.photo )
            .then( data => data.map( infos =>
                `https://farm${infos.farm}.staticflickr.com/${infos.server}/${infos.id}_${infos.secret}.jpg` ))
            .then( data =>
                this.setState({
                    photosURL: data,
                    loading: false,
                    noMatch: data.length === 0
                })
            )
            .catch( err => console.log("Error" + err) )
    }

    componentDidMount() {
        // query Flickr if there's a query string
        if ( this.keyWord ) {
            this.queryFlickr();
        }
    }

    render() {
        // render the gallery if there's a query string
        if ( this.keyWord ) {
            return  <Gallery
                photos={this.state.photosURL}
                loading={this.state.loading}
                noMatch={this.state.noMatch} />
        } else {
            return null
        }
    }
}

export default Container;
