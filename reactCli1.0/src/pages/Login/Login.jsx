import React, { Component } from 'react';
import { logingFun, logoutFun } from '../../redux/actions/postActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {

  componentDidMount(){
    
  }

  login = () => {
    this.props.logingFun()
  }

  Logout = () => {
    this.props.logoutFun('fhdjshfjsdh')
  }

  render() {
    // console.log(this.props,55555555)
    return (
      <div>
        <div>state: {this.props.bool? '登陆了': '未登录'}</div>
        <br/>
        <button onClick={this.login}>Login</button>
        &nbsp;&nbsp;
        <button onClick={this.Logout}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    bool: state.loginState.loginBool,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logingFun, logoutFun }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);