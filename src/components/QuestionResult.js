import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import NotFound from "./NotFound"

function QuestionResult(props) {
    const { id } = useParams()
    const { authedUser, users, questions } = props

    const question = questions[id]

    if (!question) {
        return <NotFound />
    }
    
    const user = users[question.author]

    const selectedOption = authedUser.answers[question.id]
    const selectedAns = question[selectedOption].text
    
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    const firstOptionVotes = question.optionOne.votes.length;
    const secondOptionVotes = question.optionTwo.votes.length;
    const totalVotes = firstOptionVotes + secondOptionVotes;
    const  optionOnePercent = Math.floor(firstOptionVotes > 0 ? (firstOptionVotes/totalVotes) * 100 : 0);
    const  optionTwoPercent = Math.floor((secondOptionVotes/totalVotes) * 100);

    return (
        <div className="question-container">
            <p style={{fontWeight: `bold`}}>Asked by {user.name}</p>
            <div className="question-item">
                <p style={{fontWeight: `bold`}}>Result:</p>
                <div className="user-avatar" style={{ backgroundImage: `url(${user.avatarURL})` }}></div>
                <div className="question-details">
                    <p style={{fontWeight: `bold`}}>Would you rather</p>
                    <div className={ selectedAns === optionOne ? "question_answer selected_answer" : "question_answer"}>
                        <div>{optionOne}</div>
                        <br />
                    
                        <meter id="option_one" value={firstOptionVotes} min="0" max={totalVotes} style={{width: '200px'}}></meter> <br />
                        <label htmlFor="option_one">{firstOptionVotes} out of {totalVotes} ({optionOnePercent}%)</label>
                    </div>
                    <hr />
                    <div className={ selectedAns === optionTwo ? "question_answer selected_answer" : "question_answer"}>
                        <div>{optionTwo}</div>
                        <br />
                        <meter id="option_two" value={secondOptionVotes} min="0" max={totalVotes} style={{width: '200px'}}></meter><br />
                        <label htmlFor="option_two">{secondOptionVotes} out of {totalVotes} ({optionTwoPercent}%)</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }) {
    const authenticatedUser  = users[authedUser]

    return {
        authedUser: authenticatedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionResult)