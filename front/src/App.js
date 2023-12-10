
import './App.css';
import Admin from './composant/authenti/Admin';
import Login from './composant/login/Login';
import Register from './composant/register/Register';
import Home from './composant/homepage/Home';
import {Routes,Route} from 'react-router-dom'
import Authentifier from './composant/authenti/Authentifier';
import Footer from './composant/footer/Footer';
import Rdv from './composant/Rdv/Rdv'; 
import DoctorList from './composant/doctor/cardDoctor/DoctorList';
import ProfilPatient from './composant/patient/profile/ProfilPatient';
import Doctor from './composant/doctor/cardDoctor/Doctor';
import Patient from './composant/patient/cardPatient/Patient';
import PatientList from './composant/patient/cardPatient/PatientList';
import ProfilDoctor from './composant/doctor/profile/ProfilDoctor';
function App() {
  return (
    <div >
      
   <Routes>
    <Route path='/doctor'  element={<PatientList/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Authentifier/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/footer'   element={<Footer/>}/>
    <Route path='/auth/rdv'   element={<Rdv/>}/>
    <Route path='/auth/patient/monprofile' element={<ProfilPatient/>}/>
    <Route path='/auth/doctor/monprofile' element={<ProfilDoctor/>}/>
    <Route path='/auth/medecines'  element={<DoctorList/>}/>
    
   </Routes>
    </div>
  );
}

export default App;
