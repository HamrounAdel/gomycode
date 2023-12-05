import React,{ useEffect }  from 'react'

import {useSelector,useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getAllUser} from '../../../api/apiUser'
import Doctor from './Doctor'
import Navigation from '../../navbar/Navigation'
import {setUser} from '../../../redux/userSlice'
function DoctorList() {
  
  const auth = useSelector(state => state.User)
  console.log('dgfjhk',auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getUs = async () => {
      const data = await getAllUser();
      console.log('users', data);
      dispatch(setUser(data))
    };

  useEffect(()=>{
    getUs()
  },[])


  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  const doctors = Array.isArray(auth) ?  auth.filter((el)=>(el.role === "Doctor")):[]
 console.log('filters doctor',doctors)

 
  return (
    <div>
      <Navigation auth={auth} logout={logout}/>
      <div>
      {doctors.map((el)=> (<Doctor el = {el}/>))}
      </div>
    </div>
  )
}

export default DoctorList
