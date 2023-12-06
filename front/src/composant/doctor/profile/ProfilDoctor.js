import React ,{useState,useEffect}from 'react'
import './profilePatient.css'
import {useSelector,useDispatch}from 'react-redux'
import { useNavigate , useParams} from 'react-router-dom'
import {putUser} from '../../../api/apiUser'
import Navigation from '../../navbar/Navigation'
import { setUser } from '../../../redux/userSlice'
function ProfilDoctor() {
  const auth = useSelector(state => state.User)
  console.log('dgfjhk',auth)
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[adress,setAdress]=useState('')
  const[phone,setPhone]=useState('')
  const[specialite,setSpecialite]=useState('')
  const[password,setPassword]=useState('')
  const[show,setShow]=useState(false)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    // Mettez à jour les états locaux lorsque l'authentification change
    setName(auth.name);
    setLastName(auth.lastName);
    setEmail(auth.email);
    setAdress(auth.adress);
    setPhone(auth.phone);
    setPassword(auth.password);
    setSpecialite(auth.specialite)
    setNewPassword('');
    setConfirmPassword('')
  }, [auth]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const handelShow = () => {
    setShow(!show);
  };

  const handelupdate = async () => {
    // Utilisez les états locaux mis à jour
    if (newPassword !== confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }
    
    const updatedData = {
      name,
      lastName,
      email,
      adress,
      phone,
      specialite,
      password,
      newPassword,
      confirmPassword
    };
    try {
    await putUser(auth._id, updatedData);
    
    dispatch(setUser(updatedData));
    navigate('/auth/doctor/moncompte');
    setShow(false);
    alert("modifier avec succès !");
   
  }catch (err){
console.log(err)
  }
  
  };
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

export default  ProfilDoctor
