 import React,{ useState,useEffect }  from 'react'
import './doctor.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getAllUser} from '../../../api/apiUser'
import Doctor from './Doctor'
import Navigation from '../../navbar/Navigation'
import {setUser} from '../../../redux/userSlice'

function DoctorList() {
   const auth = useSelector((state) => state.User)
  console.log('redux users',auth)
    
  const navigate = useNavigate()
  const dispatch = useDispatch()

     const getUs = async () => {
      const data = await getAllUser();
         console.log('users', data);
          dispatch(setUser(data.users));
       } 
    useEffect(() => {
    getUs();
  }, []);

  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
    const doctors = Object.values(auth).filter((el)=>el.role==='Doctor')
   console.log('doctors filter',doctors)
 
  return (
    <div >
       <Navigation auth={auth} logout={logout} />
      <div className='grid-container'> 
    
      {doctors
      .map((el)=> <Doctor key={el._id} el = {el}/>) 
      }
    
      </div>
      
    </div>
  )
}

export default DoctorList
