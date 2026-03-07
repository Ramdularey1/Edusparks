import { useState, useEffect } from 'react'

export default function useAuth(){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    // placeholder: load user from localStorage/session
    const stored = localStorage.getItem('edu_user')
    if(stored) setUser(JSON.parse(stored))
  },[])

  function login(payload){
    setUser(payload)
    localStorage.setItem('edu_user', JSON.stringify(payload))
  }

  function logout(){
    setUser(null)
    localStorage.removeItem('edu_user')
  }

  return { user, login, logout }
}
