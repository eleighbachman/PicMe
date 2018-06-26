import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'puppies'}

  }
  render() {
    return(
      <div className="form-group row">
        <div className="col-sm-12 input-group searchField">
          <input className="form-control"
          type="search"
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
          <div className="input-group-addon searchBtn" onClick={()=> console.log("clicked")}><FontAwesomeIcon icon="search" /></div>
        </div>
      
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default Searchbar;
