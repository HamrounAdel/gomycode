import React from 'react'
import {setUser} from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getAccount} from '../../api/apiUser'
import Admin from './Admin'
import Users from './Users'
import PatientCard from '../patient/cardPatient/PatientCard'
import DoctorCard from '../doctor/cardDoctor/DoctorCard'
import Login from '../login/Login'
import Navigation from '../navbar/Navigation'
function Authentifier() {

  const auth = useSelector(state=>state.User)
  console.log('auth =>', auth)

const dispatch = useDispatch()
const navigate = useNavigate()
const getAcc=async()=>{
  const data = await getAccount()
  console.log('data login', data)
  
  dispatch(setUser(data))
}
useEffect(()=>{
  getAcc()
},[])

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}

const token = localStorage.getItem('token')

  return (
    <div>
     
      {
token ? (<><Navigation auth={auth} logout={logout}   />
{
  auth.role === "admin" ?  <Admin/> :auth.role  === "Patient" ? <PatientCard/> :<DoctorCard/>

}</>):(<Login/>)
      }
    </div>
  )
}

export default Authentifier