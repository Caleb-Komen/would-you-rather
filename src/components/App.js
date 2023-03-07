import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import SignIn from './SignIn';
import Home from './Home';
import QuestionResult from './QuestionResult';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import QuestionPage from './QuestionPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading-bar';
import Nav from './Nav';
import NotFound from './NotFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/add' element={<NewQuestion />} />
              <Route path='/leaderboard' element={<LeaderBoard />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/questions/:id' element={<QuestionPage />} />
              <Route path='/result/:id' element={<QuestionResult />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </Fragment>
    </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
