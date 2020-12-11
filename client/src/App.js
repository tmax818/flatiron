import React from 'react'
import './App.css';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'

import Main from './components/Main'
import Lesson from './components/Lesson'

class App extends React.Component {

  state = {lessons: []}

  fetchLessons = () => {
  axios.get("http://localhost:3001/lessons").then(res => this.setState({lessons: res.data}))
  }


  componentDidMount() {
    this.fetchLessons()
  }

  render() {
    const {lessons} = this.state
    console.log(lessons)
    return (
      <div className="App">
        <Switch>
          <Route path='/lesson/:id' render={({match}) => <Lesson lesson={lessons.find(lesson => lesson.id === +match.params.id)} /> } />
          <Route path='/' render={() => <Main lessons={this.state.lessons}/>} />
        </Switch>
    </div>
  );
}
}

export default App;
