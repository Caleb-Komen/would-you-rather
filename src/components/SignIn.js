import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import logo from '../or.png';

function SignIn(props) {
    const navigate = useNavigate()
    const { state } = useLocation()

    const [userId, setUserId] = useState(null)

    const onChange = (e) => {
        e.preventDefault()
        setUserId(e.target.value)
        
    }

    const signIn = (evt) => {
        evt.preventDefault()
        props.dispatch(setAuthedUser(userId))
        console.log('PATH: ', state?.path)
        navigate(state?.from?.pathname || '/');
    }


    const { users } = props
    
    return (
        <div className="sign-in-container">
            <div>
                <h4>Welcome to Would You Rather</h4>
                <h5>Sign in to continue</h5>
                <img
                    src={logo}
                    alt={"App logo"}
                    className='logo'
                />
                <select onChange={onChange}>
                    <option value={null}>Select User</option>
                    {Object.values(users).map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <button className='sign-in-button' onClick={signIn} disabled={userId === null}>Sign In</button>
            </div>
        </div>
    )

}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(SignIn)