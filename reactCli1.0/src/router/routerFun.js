import routes from './routerPath';
import { Route, Redirect, Switch } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

function authorizationFun (props,r) {
  // console.log(props)
  const isLogged = props.bool;
  // 不需要需要登录
  if(!r.authorization){
    return <r.component {...props} routes={r.routes}/>
  }
  // 需要登录&&登录成功 
  if(r.authorization && isLogged){
    return <r.component {...props} routes={r.routes}/>
  }
  // 需要登录&&未登录 
  if(r.authorization && !isLogged){
    alert('未登录，请前往登录！')
    return <Redirect to="/Login" />
  }
} 

class routerFun extends Component {

  componentWillUpdate(prveProps){
    // console.log(prveProps)
  }

  render() {
    let bool = this.props.bool
    return (
      <Suspense fallback={<div className='loadingBox'>loading....</div>}>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/Home" />
          )} />
          {
            routes.map((item, i) => {
              return (
                <Route
                  path={item.path}
                  key={item.name}
                  exact={item.exact}
                  strict={item.strict}
                  render={props => {
                    props.bool = bool
                    return authorizationFun(props,item)
                  }} />
              )
            })
          }
          <Route render={() => {
            return <div>404 该地址不存在！</div>
          }}/>
        </Switch>
      </Suspense>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bool: state.loginState.loginBool,
  }
}

export default connect(mapStateToProps, {})(routerFun);
