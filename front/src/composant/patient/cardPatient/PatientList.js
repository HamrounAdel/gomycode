import React from 'react'
import PatientCard from './PatientCard'
import {useSelector,useDispatch}from 'react-redux'
import { getAccount} from '../../../api/apiUser'
import {setUser} from '../../../redux/userSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../../navbar/Navigation'
function PatientList() {
  
  const auth = useSelector(state => state.User)
  console.log('ghjklllm',auth)




  return (
    <>
    
    <div>
      {auth.map((el)=><PatientCard  />)}
     
    </div>
    </>
  )
}

export default PatientList
