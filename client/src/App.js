import React from 'react'
import './App.css';
import Main from './components/Main'

const fetchLessons = () => {
  fetch("http://localhost:3001/lessons").then(res => console.log(res.json()))
}

class App extends React.Component {

  componentDidMount() {
    fetchLessons()
  }

  render() {

    return (
      <div className="App">
      <Main/>
    </div>
  );
}
}

export default App;
