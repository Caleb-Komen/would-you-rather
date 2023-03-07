import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom";

class LeaderBoard extends React.Component {
    render() {
        const { authedUser, users } = this.props

        if (authedUser === null) {
            return <Navigate replace to="/signin" />;
        }

        return (
            <div>
                <ul className="leader-board-list">
                    {Object.values(users).map((user) => (
                        <li key={user.id}>
                            <div className="leader-board-info">
                                <div className="leader-board-item">
                                    <div className="user-avatar" style={{ backgroundImage: `url(${user.avatarURL})` }}></div>
                                    <div className="question-details">
                                        <p style={{fontWeight: `bold`}}>{user.name}</p>
                                        <p>Answered questions: {Object.keys(user.answers).length}</p>
                                        <p>Created questions: {user.questions.length}</p>
                                        <p>Score: {Object.keys(user.answers).length + user.questions.length}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users: Object.values(users).sort((a, b) => (
            (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
        ))
        
    }
}

export default connect(mapStateToProps)(LeaderBoard)