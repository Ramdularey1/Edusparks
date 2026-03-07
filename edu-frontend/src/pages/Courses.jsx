import React from 'react'

const sampleCourses = [
  { id:1, title:'Intro to Algebra' },
  { id:2, title:'Web Development Basics' }
]

export default function Courses(){
  return (
    <section>
      <h1>Courses</h1>
      <ul>
        {sampleCourses.map(c => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </section>
  )
}
