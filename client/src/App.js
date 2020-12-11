import React from 'react'
import './App.css';
import Main from './components/Main'


class App extends React.Component {

  state = {lessons: []}

  fetchLessons = () => {
  fetch("http://localhost:3001/lessons").then(res => res.json()).then(data => this.setState({lessons: [...data]}))
  }

  componentDidMount() {
    this.fetchLessons()
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Main lessons={this.state.lessons}/>
    </div>
  );
}
}

export default App;
