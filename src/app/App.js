import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions'

class App extends Component {
   render(){
     return(
       <div>
          <h2>oi</h2>
          <input type="button" value="fetch" onClick={this.props.getUser}/>
          <h2>{this.props.user.nome}</h2>
       </div>
     )
   }
}

const mapStateToProps = (state) => {
  return{
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(fetchUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
