import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AuthButton from './authButton'
import Public from './publice'
import Login from './login'
import Protected from './protected'
import PrivateRoute from './privateRoute'
const App = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">公共页面</Link></li>
        <li><Link to="/protected">保护页面</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
)
export default App
