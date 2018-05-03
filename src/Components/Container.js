import React, {Component} from 'react';
import Gallery from './Gallery.js'

class Container extends Component {

    constructor({keyWord, apiKey}) {
        super();
        this.state = {
            loading: true,
            photosURL: [],
            photosPerPage: 16
        };
        this.keyWord = keyWord;
        this.apiKey = apiKey;
    }

    queryFlickr() {
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&tags=${this.keyWord}&per_page=${this.state.photosPerPage}&format=json&nojsoncallback=1`;
        fetch(url)
            .then( res => res.json() )
            .then( data => data.photos.photo )
            .then( data => data.map( infos =>
                `https://farm${infos.farm}.staticflickr.com/${infos.server}/${infos.id}_${infos.secret}.jpg` ))
            .then( data => this.setState({ photosURL: data, loading: false }) )
            .catch( err => console.log("Error" + err) )
    }

    componentDidMount() {
        this.queryFlickr();
    }

    render() {
        return(
            <div>
                <Gallery photos={this.state.photosURL} loading={this.state.loading}/>
            </div>
        )
    }

}

export default Container;
