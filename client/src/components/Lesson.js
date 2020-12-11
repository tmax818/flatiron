import React from 'react'

const Lesson = ({lesson}) => {
    let url = lesson.lab ? "learn-co-students/" : "learn-co-curriculum/"
    return (
        <div>
            <h1>{lesson.slug}</h1>
            <a href={"http://github.com/" + url + lesson.slug} target="blank">{lesson.slug}</a>
        </div>
    )
}
export default Lesson;