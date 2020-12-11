import React, { Component } from 'react'
import Lesson from './Lesson'
import {Link} from 'react-router-dom'

class Main extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.lessons.map(lesson => {
                    return (
                        <div>
                        <Link key={lesson.id} to={`/lesson/${lesson.id}`} >{lesson.slug}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Main;