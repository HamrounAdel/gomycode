import React from 'react'
import './rdv.css'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Navigation from '../navbar/Navigation'
function Rdv() {
    const navigate = useNavigate()
    const auth = useSelector(state=>state.User)
    console.log('auth =>', auth)
    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }
    
  return (
    <>
    <Navigation auth={auth} logout={logout}   />
   
    <div className='rdv-container'>
    <h2>Prendre un Rendez-vous</h2>
      <div>
        <label htmlFor="datePicker">Selection une Date :</label>
        <input type="date"   />
        <label htmlFor="text">Selection un Specialite :</label>
        <select type="select"  > 
          <option>--------------------</option>
        </select>
        <label htmlFor="text">Selection un  Doctor :</label>
        <select type="select"  > 
          <option>{}</option>
        </select>
      </div><br/>
      <button >Prendre Rendez-vous</button>
    </div>
    </>
  )
}

export default Rdv
