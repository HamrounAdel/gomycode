import React from 'react'
import './rdv.css'
import { useNavigate } from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import Navigation from '../navbar/Navigation'
import { useEffect, useState } from 'react'
import { getAllUser } from '../../api/apiUser'
function Rdv() {
 const navigate = useNavigate()
const auth = useSelector(state=>state.User)
console.log('auth =>', auth)
const [userList, setUserList] = useState([]);
 const [searchSpeciality,setSearchSpeciality]=useState('')
const dispatch = useDispatch()

    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
    }


   const getUs = async () => {
        try{
        const data = await getAllUser();
          //  console.log('users', data);
           console.log('users from getUs', data.users);
           setUserList(data.users);
            // dispatch(setUser(data.users));
        }catch(error){
          console.error('Error fetching users:', error);
        }
         } 
      useEffect(() => {
      getUs();
    }, []);

    console.log("this is users list :", userList);
   
    const doctors = userList.filter(el =>el.role === 'Doctor' &&(el.specialite===searchSpeciality)).filter(el =>(el.specialite===searchSpeciality))
  
  
  return (
    <>
    <Navigation auth={auth} logout={logout}   />
   
    <div className='rdv-container'>
    <h2>Prendre un Rendez-vous</h2>
      <div>
      <label htmlFor="text" 
      style={{color:'aqua',textAlign:'center'}}>
        Nom: {`${auth.name} ${auth.lastName}`}</label>
        <br/>
        <label htmlFor="datePicker">Selection une Date :</label>
        <input type="date"   />
        <label htmlFor="text">Selection un Specialite :</label>
        <select type="select" 
        value={searchSpeciality} 
        onChange={(e) => setSearchSpeciality(e.target.value)} > 
        <option defaultValue=""></option>
        <option value="Géneraliste">Géneraliste</option>
  <option value="Pédiatre">Pédiatre</option>
  <option value="Dentiste">Dentiste</option>
  <option value="Ophtalmologue">Ophtalmologue</option>
  <option value="Ostéopathe">Ostéopathe</option>
  <option value="Gastro-entérologue">Gastro-entérologue</option>
        </select>
        <label htmlFor="text">Selection un  Doctor :</label>
        <select type="select"  > 
        {doctors. map(el=>
          <option value={`${el.name} ${el.lastName}`}>{`${el.name} ${el.lastName}`} </option>)}
        </select>
      </div><br/>
      <button >Prendre Rendez-vous</button>
    </div>
    </>
  )
}

export default Rdv
