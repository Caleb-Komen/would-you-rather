import React from "react"
import { connect } from "react-redux"

class User extends React.Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <div className="user-avatar" style={{ backgroundImage: `url(${user.avatarURL})` }}></div>
                <div className="user-details"><p>{user.name}</p></div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id]
    return {
        user
    }
}

export default connect(mapStateToProps)(User)