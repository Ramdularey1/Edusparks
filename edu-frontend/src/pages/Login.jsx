import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    if(!email || !password){
      setError('Please enter email and password')
      return
    }
    // placeholder: in real app call API then login
    login({ email })
    navigate('/profile', { replace: true })
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to EduSpark</h2>
        {error && <div style={{color:'crimson',marginBottom:8}}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:12}}>
            <label>Email</label>
            <input className="input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div style={{marginBottom:12}}>
            <label>Password</label>
            <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••" />
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="btn-primary" type="submit">Sign in</button>
            <button type="button" className="btn-ghost" onClick={()=>{setEmail('');setPassword('');setError('')}}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}
