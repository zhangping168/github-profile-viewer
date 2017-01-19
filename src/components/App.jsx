import React, {Component} from 'react';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      username:'zhangping168',
      userData:[],
      userRepos:[],
      perPage:10
    }
  }

  getUserData(){
      $.ajax({
        url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
        dataType:'json',
        cache:false,
        success:function(data){
          //pass data to state
          this.setState({userData:data});

        }.bind(this),
        error:function(xhr, status, err){
          //rest the state username to NULL
          this.setState({username:null});
          console.log(err);
        }.bind(this)
      });
  }


  getUserRepos(){
      $.ajax({
        url:'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
        dataType:'json',
        cache:false,
        success:function(data){
          //pass data to state
          this.setState({userRepos:data});

        }.bind(this),
        error:function(xhr, status, err){
          //rest the state username to NULL
          this.setState({userRepos:null});
          console.log(err);
        }.bind(this)
      });
  }

  //get search user data
  handleFormSubmit(username){
    this.setState({username:username}, function(data){
      if(!data){
        this.getUserData();
        this.getUserRepos();
      }else{
        Alert('User Not Found!');return;
      }
    }.bind(this));
  }
  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }
  render(){
    return (
      <div >
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state}  key={this.state.userData.id}/>
      </div>
    );
  }
}

App.propTypes ={
  clientId:React.PropTypes.string,
  clientSecret:React.PropTypes.string
}

App.defaultProps={
  clientId:'b3da4012d8d43ec02bb0',
  clientSecret:'618d3495b68d889a39ced7396d5a49ecb7261040'
}

export default App;
