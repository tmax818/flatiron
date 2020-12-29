import React from 'react'
import AddLesson from './AddLesson'

const Lesson = ({lesson}) => {
    let url = lesson.lab ? "learn-co-students/" : "learn-co-curriculum/"
    return (
        <div>
            <h1>{lesson.slug}</h1>
            <a href={"http://github.com/" + url + lesson.slug} target="blank">{lesson.slug}</a>
            <AddLesson lesson={lesson}/>
        </div>
    )
}
export default Lesson;