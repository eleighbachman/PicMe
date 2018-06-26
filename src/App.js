import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import { API_KEY } from './config';

import Searchbar from './components/Searchbar';
import ImageField from './components/ImageField';

library.add(faSearch);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
    this.picSearch = this.picSearch.bind(this);
    this.picSearch('puppies');
  }

  picSearch(term, number) {
    if(term) {
    this.setState({ pictures : []})
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${term}&per_page=12&page=1&format=json&nojsoncallback=1`)
    .then(function(response){
      return response.json();
    })
    .then(function(j) {
      let picArray = j.photos.photo.map((pic) => {
        let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
        let title = pic.title;
        return(
          <img alt={title} src={srcPath} />
        )

      })
      this.setState({ pictures: picArray });
      console.log(this.state.pictures);
    }.bind(this))
  }
}

  //componentDidMount(){

    // fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7571a6f812ce7ff9917cab815b4d1584&text=${this.state.term}&per_page=12&page=1&format=json&nojsoncallback=1`)
    // .then(function(response){
    //   return response.json();
    // })
    // .then(function(j) {
    //   let picArray = j.photos.photo.map((pic) => {
    //     let srcPath = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
    //     let title = pic.title;
    //     return(
    //       <img alt={title} src={srcPath} />
    //     )
    //   })
    //   this.setState({ pictures: picArray });
    // }.bind(this))

  //}





  render() {
    const picSearch = _.debounce((term) => {this.picSearch(term)}, 300);
    return (
      <div className="App">
        <div className="container">
        <p className="header">PicMe</p>
        <h2 className="poweredBy">Powered by React &amp; Bootstrap</h2>
        <p>Search to view the most recent posts on Flickr</p>
        <Searchbar onSearchTermChange={picSearch}/>
        <div className="imgField">
          <ImageField pictures={this.state.pictures} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
