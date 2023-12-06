import React , { useState } from 'react'
import './updateDoctor.css'
import { useNavigate,useParams } from 'react-router-dom'
import {putUser} from '../../../api/apiUser'
import Navigation from '../../navbar/Navigation'
import { useSelector } from 'react-redux'

function UpdateDoctor() {
    const auth = useSelector(state => state.User)
    const navigate=useNavigate()
    const {id}=useParams()
    
  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[adress,setAdress]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  
  const handelupdate=async(id,value)=>{
   await putUser(id,value)
   navigate('/auth/doctor/moncompte')
  }
  const logout = () => {
     
    localStorage.removeItem('token')
    navigate('/auth')
  }
    return (
      <>
      <Navigation auth={auth} logout={logout} />
      <div className='bodyadd'>
        
      <div className="container ">
        
    <div className="text">modifier mon compte</div>
    <form action="#">
      <div className="form-row">
      
        <div className="input-data">
          <input type="text" required="true" 
          value={name} 
          onChange={(e)=>setName(e.target.value)}/>
          <div className="underline" />
          <label htmlFor="">First Name</label>
        </div>
        <div className="input-data">
          <input type="text" required="true"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)} />
          <div className="underline" />
          <label htmlFor="">Mot de passe</label>
        </div>
      
        <div className="input-data">
          <input type="password" required="true"
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}/>
          <div className="underline" />
          <label htmlFor="">Last Name</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" required="true" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          <div className="underline" />
          <label htmlFor="">Email Address</label>
        </div>
        
        <div className="input-data">
          <input type="text" required="true"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)} />
          <div className="underline" />
          <label htmlFor="">Phone</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data textarea">
          <textarea rows={8} cols={80} required="true"  
          value={adress}
          onChange={(e)=>setAdress(e.target.value)}/>
          <br />
          <div className="underline" />
          <label htmlFor="">Write your adress</label>
          <br />
          
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner" />
              <input type="button" defaultValue="modifier Contact"
               onClick={()=>handelupdate(id,{name,lastName,email,phone,adress,password})}/>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  </div>
  </>
    )
  }

export default UpdateDoctor
