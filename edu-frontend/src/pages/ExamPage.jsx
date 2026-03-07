import React from 'react'
import { useParams, Link } from 'react-router-dom'

const MOCK_COURSES = [
  { id: 1, title: 'Complete Foundation Course' },
  { id: 2, title: 'Advanced Problem Solving' },
  { id: 3, title: 'Topic-wise Practice' },
]

const MOCK_TESTS = [
  { id: 1, title: 'Full Length Mock 1' },
  { id: 2, title: 'Chapter Test - Mechanics' },
  { id: 3, title: 'Speed & Accuracy Drill' },
]

function slugToKey(slug){
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export default function ExamPage(){
  const { slug } = useParams()
  const examKey = slug ? slugToKey(slug) : 'Exam'

  return (
    <div style={{padding:24, maxWidth:1100, margin:'0 auto'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
        <h2 style={{margin:0}}>{examKey}</h2>
        <Link to="/" style={{color:'#0ea5a4'}}>Back to home</Link>
      </div>

      <section style={{marginBottom:24}}>
        <h3>Recommended courses</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
          {MOCK_COURSES.map(c => (
            <div key={c.id} style={{padding:12,background:'#fff',borderRadius:8,boxShadow:'0 6px 18px rgba(15,23,37,0.04)'}}>
              <div style={{fontWeight:700}}>{c.title}</div>
              <div style={{color:'#475569',marginTop:6}}>Short description about this course tailored for {examKey}.</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Test series</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
          {MOCK_TESTS.map(t => (
            <div key={t.id} style={{padding:12,background:'#fff',borderRadius:8,boxShadow:'0 6px 18px rgba(15,23,37,0.04)'}}>
              <div style={{fontWeight:700}}>{t.title}</div>
              <div style={{color:'#475569',marginTop:6}}>A mock test to help you evaluate your readiness for {examKey}.</div>
              <div style={{marginTop:10}}>
                <button style={{background:'#0ea5a4',color:'#fff',padding:'8px 12px',borderRadius:8,border:'none'}}>Take Test</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
