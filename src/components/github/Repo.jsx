import React, {Component} from 'react';

class Repo extends Component{

  render(){
    let {repo} = this.props;
    return (
        <li className="list-group-item" key={repo.id}>
          <a href={repo.html_url} target="_blank">{repo.name}</a> : {repo.description || 'No description' }
        </li>

    );
  }
}


export default Repo;
