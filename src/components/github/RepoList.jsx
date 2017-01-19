import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component{

  render(){
    return (
        <div className="" key={this.props.id}>
          <ul className="list-group">
            {
              this.props.userRepos.map((repo)=>{
                return (<Repo repo={repo} id={repo.id} {...this.props}/>);
              })
            }
          </ul>
        </div>

    );
  }
}

export default RepoList;
