import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import logo from '../or.png';

class SignIn extends React.Component {
    state = {
        userId: null,
        toHome: false
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            userId: e.target.value
        })
    }

    signIn = (evt) => {
        evt.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.userId))
        this.setState({
            toHome: true
        })
    }

    render() {
        const { users } = this.props
        if (this.state.toHome === true) {
            return <Navigate to='/' replace={true} />
        }
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
                    <select onChange={this.onChange}>
                        <option value={null}>Select User</option>
                        {Object.values(users).map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                    <button className='sign-in-button' onClick={this.signIn} disabled={this.state.userId === null}>Sign In</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(SignIn)