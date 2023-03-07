import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';

function Nav(props) {
  const { authedUser, user } = props;
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined } end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' className={({ isActive }) => isActive ? 'active' : undefined }>
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink to='/leaderboard' className={({ isActive }) => isActive ? 'active' : undefined }>
            Leader Board
          </NavLink>
        </li>

        <li>
          <div className='profile-info'>
              {authedUser !== null && (
                <div>
                  <span>Hi <strong>{user}</strong></span>
                  <button style={{marginLeft: "4px"}} onClick={() => props.dispatch(setAuthedUser(null))}>Logout</button>
                </div>
              )}
          </div>
        </li>
      </ul>
    </nav>
  )
}

function mapStateToProps({ authedUser, users }) {
  const user = authedUser
                ? users[authedUser].name
                : "";
  return{
    authedUser,
    user,
  }
}

export default connect(mapStateToProps)(Nav);