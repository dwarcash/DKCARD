import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './NavLinks.css'
import * as actions from '../../../store/actions/index'
import { AuthContext } from '../../context/auth-context'
import User from '../../../Person/components/GenerationBox/User'
import Parent from '../../../Person/components/GenerationBox/Parent'


const NavLinks = props => {
  const auth = useContext(AuthContext)

  const logOutHandler = () => {
    auth.logout()
    props.clearTreeData()
    props.clearGenData()
  }

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && props.allUsers &&
        <div className="sidedrawer__user">
          <Parent /* className="gen-person__login" */ user={{ ...props.allUsers.find(u => u._id === auth.userId) }} />
          <div className="sidedrawer__user-bottom" />
        </div>}
      {!auth.isLoggedIn && <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
        <NavLink to="/treeactivity" >ACTIVITY LOG</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
        <NavLink to="/generations">FAMILY TREE</NavLink>
      </li>}
      {auth.isLoggedIn &&
        <button className="navlinks__logout" onClick={logOutHandler}>LOGOUT</button>}
    </ul>
  )
}

const mapStatetoProps = state => {
  return {
    allUsers: state.tree.users,
  }
}


const mapDispatchtoProps = dispatch => {
  return {
    clearGenData: () => dispatch(actions.clearGenData()),
    clearTreeData: () => dispatch(actions.clearTreeData()),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NavLinks)