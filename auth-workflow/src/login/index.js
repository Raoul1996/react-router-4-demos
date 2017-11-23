import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import fakeAuth from '../fakeAuth'

export default class Login extends Component {
  constructor (props){
    super(props)
    this.state={
      redirectToReferrer: false
    }
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render () {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const {redirectToReferrer} = this.state
    if(redirectToReferrer){
      return (<Redirect to={from}/>)
    }
    return (
      <div>
        <p>你必须登录才可以浏览{from.pathname}的内容</p>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
