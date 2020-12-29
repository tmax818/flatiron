import React, { Component } from 'react'

class AddLesson extends Component {

        state = {id: null, title: "", slug: "", lab: false}

        componentDidMount(){
            this.setState({...this.props.lesson})
        }

        handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
      
        }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Add Lesson</h1>
                <form >
                    <label htmlFor="id">id</label>
                    <input type="number" name="id" id="id" value={this.state.id} onChange={this.handleChange}/>
                    <label htmlFor="title">title </label>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <label htmlFor="slug">slug</label>
                    <input type="text" name="slug" id="slug" value={this.state.slug} onChange={this.handleChange}/>
                    <label htmlFor="lab">lab</label>
                    <input type="checkbox" name="lab" id="lab" value={this.state.lab} onChange={this.handleChange} checked={this.state.lab}/>
                </form>
            </div>
        )
    }
}
export default AddLesson;