import React from 'react'
import { withRouter } from 'react-router-dom'
import fakeAuth from '../fakeAuth'

const AuthButton = withRouter(({history}) => (
  fakeAuth.isAuthenticated ? (<p>欢迎！
    <button onClick={() => {fakeAuth.singout(() => history.push('/'))}}>退出</button>
  </p>) : (<p>您还没有登录</p>)
))

export default AuthButton
