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
      
      <p>Telephone:{auth.phone} </p>
    
    </div>
    </div>
   
  </div>
  </>
  )
}

export default PatientCard
