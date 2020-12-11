import React, { Component } from 'react'
import Lesson from './Lesson'

export default class Main extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.lessons.map(lesson => {
                    return (
                        <Lesson lesson={lesson}/>
                    )
                })}
            </div>
        )
    }
}
