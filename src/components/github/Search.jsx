import React, {Component} from 'react';

class Search extends Component{
  onSubmit(e){
    e.preventDefault();
    let username = encodeURI(this.refs.username.value.trim());
    //check input value if empty
    if(!username){
      alert('Please enter a username');
      return;
    }
    this.props.onFormSubmit(username);
    //clear the input
    this.refs.username.value='';
  }
  render(){

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github Users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}


export default Search;
