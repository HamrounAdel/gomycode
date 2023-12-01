import React, { useState } from 'react'
import './login.css'
import '../homepage/home.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const navigate =useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
  
 const handelLogin=async(values)=>{
    const res = await axios.post('http://localhost:5003/auth/login',values)
    await console.log('reponse login', res.data.token)
    await localStorage.setItem('token',res.data.token)
    navigate('/auth')
  }

  return (
    <div>
      <header  className='headerhome'>
  <div className='menu'>
    <ul>
      <li>
      <a><span  style={{color:'aqua'}}>Rendez-vous Medical</span></a>
       </li>
    </ul>
      
     </div>
    <div className="menu">
     
      <ul>
      <li>
         <Link to='/'><a >Acceuil</a></Link> 
        </li>
        <li>
         <Link to='/register'><a >register</a></Link> 
        </li>
      
      </ul>
     
    </div>
  </header>
   
    <div className='bodylogin'>
      
    <div className="form-structor">
    <div className="signup">
      <h2 className="form-title" id="signup">
        <span>or</span>Sign up
      </h2>
      <div className="form-holder">
        
        <input type="email" 
        className="input" 
        placeholder="Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password"
         className="input" 
         placeholder="Password"
         value={password}
        onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button className="submit-btn" onClick={()=>handelLogin({email,password})} >Sign up</button>
    </div>
    <div className="login slide-up">
      <div className="center">
        <h2 className="form-title" id="login">
          <span>or</span><Link to='/register'>create account</Link>
        </h2>
       
        <button className="submit-btn" >Log in</button>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Login