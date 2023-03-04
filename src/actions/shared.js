import { hideLoading, showLoading } from "react-redux-loading-bar"
import { _getQuestions, _getUsers } from "../utils/_DATA"
import { setAuthedUser } from "./authedUser"
import { receiveQuestions } from "./questions"
import { receiveUsers } from "./users"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getUsers(),
            _getQuestions()
        ]).then(([users, questions]) => ({
            users,
            questions
        })).then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(null))
            dispatch(hideLoading())
        })
    }
}