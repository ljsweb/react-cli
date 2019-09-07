import React, { Component } from 'react'

export default class Home extends Component {

  jumpFun = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <div>Home</div>
        <br/>
        <button onClick={() => this.jumpFun('/List')}>jump</button>
        <br/>
        <button onClick={() => this.jumpFun('/Login')}>login</button>
      </div>
    )
  }
}
