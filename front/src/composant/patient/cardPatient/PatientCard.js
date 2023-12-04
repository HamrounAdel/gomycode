import React from 'react'
import './patientCard.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../navbar/Navigation'
function PatientCard() {
  const navigate = useNavigate()
  const auth = useSelector(state => state.User)
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  const handelEdite=()=>{
    navigate(`/auth/updateprofil/${auth._id}`)
  }
  return (
    <>
    <Navigation auth={auth} logout={logout}   />
    <div  className='bodypat'>
        <div className="container">
           <h1>Mon compte</h1>
              <div className="patient-info">
                  <p>Name:{auth.name}</p>
                  <p>lastName:{auth.lastName} </p>
                  <p>Email:{auth.email} </p>
                  <p>Adress:{auth.adress}</p>
                 <p>Telephone:{auth.phone} </p>
              </div>
              <div className='butt'>
                  <button onClick={()=>handelEdite()}>modifier mon compte</button>
                  <button>supprimer compte</button>
               </div>    
    </div>
  
  </div>
 
  </>
  )
}

export default PatientCard
