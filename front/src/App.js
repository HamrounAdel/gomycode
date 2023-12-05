
import './App.css';
import Admin from './composant/authenti/Admin';
import Login from './composant/login/Login';
import Register from './composant/register/Register';
import Home from './composant/homepage/Home';
import {Routes,Route} from 'react-router-dom'
import Authentifier from './composant/authenti/Authentifier';
import Footer from './composant/footer/Footer';
import Rdv from './composant/Rdv/Rdv'; 
import PatientCard from './composant/patient/cardPatient/PatientCard'

import UpdatePatient from './composant/patient/updatePatient/UpdatePatient';
import  UpdateDoctor from './composant/doctor/updatDoctor/UpdateDoctor';
import DoctorList from './composant/doctor/cardDoctor/DoctorList';
function App() {
  return (
    <div className="App">
      
   <Routes>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Authentifier/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/footer'   element={<Footer/>}/>
    <Route path='/auth/rdv'   element={<Rdv/>}/>
    <Route path='/auth/moncompte' element={<PatientCard/>}/>
    <Route path='/auth/updateprofil/:id' element={<UpdatePatient/>}/>
    <Route path='/auth/updatprofil/:id' element={<UpdateDoctor/> }/>
    <Route path='/auth/medecines'  element={<DoctorList/>}/>
    
   </Routes>
    </div>
  );
}

export default App;
