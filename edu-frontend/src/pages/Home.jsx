import React from 'react'
import hero from '../assets/images/edufrontImage.png'
import iitImg from '../assets/images/iit-jee.svg'
import gateImg from '../assets/images/gate.svg'
import neetImg from '../assets/images/neet.svg'
import govtImg from '../assets/images/govt-job.svg'
import catImg from '../assets/images/cat.svg'
import upscImg from '../assets/images/upsc.svg'

const EXAMS = [
  { key: 'IIT JEE', img: iitImg },
  { key: 'GATE', img: gateImg },
  { key: 'NEET', img: neetImg },
  { key: 'Govt Jobs Preparation', img: govtImg },
  { key: 'CAT', img: catImg },
  { key: 'UPSC', img: upscImg },
]

import { useNavigate } from 'react-router-dom'

function slugify(key){
  return key.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

export default function Home(){
  const navigate = useNavigate()
  function goToExam(key){
    navigate(`/exam/${slugify(key)}`)
  }

  return (
    <>
    <section className="hero" style={{paddingTop:28}}>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Empower your learnings — focused exam preparation</h1>
          <p className="hero-sub">Choose your exam path, access curated courses, and track progress — all in one student-friendly platform.</p>

          <div className="cta-row">
            <button className="cta-btn">Get Started</button>
            <button className="cta-ghost">Explore Courses</button>
          </div>

          <div className="features" style={{marginTop:28}}>
            <div className="feature-card">
              <div className="feature-title">Curated courses</div>
              <div className="feature-desc">Hand-picked lessons and practice for each exam.</div>
            </div>
            <div className="feature-card">
              <div className="feature-title">Practice & Tests</div>
              <div className="feature-desc">Timed tests and mock exams that mirror the real thing.</div>
            </div>
            <div className="feature-card">
              <div className="feature-title">Progress tracking</div>
              <div className="feature-desc">Visuals dashboards to monitor improvement and weak areas.</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={hero} alt="EduSpark front" style={{maxWidth:'100%',borderRadius:12}} />
        </div>
      </div>

      <div style={{maxWidth:1100,margin:'32px auto 0'}}> 
        <h3 style={{marginBottom:12}}>Pick your exam</h3>
        <div className="exam-grid" aria-label="exam selection">
          {EXAMS.map(({key, img}) => (
            <div
              key={key}
              role="button"
              tabIndex={0}
              className="exam-card"
              onClick={() => goToExam(key)}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') goToExam(key) }}
              style={{backgroundImage:`url(${img})`}}
            >
              <div className="exam-card-overlay">
                <span className="exam-card-title">{key}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>EduSpark</h4>
          <p className="muted">Helping students prepare for competitive exams with curated courses and practice.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a className="footer-link" href="/courses">Course</a></li>
            <li><a className="footer-link" href="/exam/iit-jee">IIT JEE</a></li>
            <li><a className="footer-link" href="/exam/gate">GATE</a></li>
            <li><a className="footer-link" href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p className="muted">support@eduspark.example</p>
          <p className="muted">+91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} EduSpark — All rights reserved.</div>
    </footer>
    </>
  )
}
