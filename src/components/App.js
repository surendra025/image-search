import React from 'react';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import axios from 'axios'
//const API_KEY = process.env.REACT_APP_API_KEY


class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers: {
                Authorization: `Client-ID OwRuEk6CK5qvrJyjGHeiFOApr99rlyigXwt2zFlT8IM`
            }
 
        })

        this.setState({ images: response.data.results })
    }

    render(){
        return (
            <div>
                <h2 className="head">Unsplash Images</h2>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span className="found">Found: {this.state.images.length} images </span>
                <h1></h1>
                <ImageList foundImages={this.state.images}/>
            </div>
        )
    }
}
export default App;