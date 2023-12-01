
import './App.css';
import Admin from './composant/authenti/Admin';
import Login from './composant/login/Login';
import Register from './composant/register/Register';
import Home from './composant/homepage/Home';
import {Routes,Route} from 'react-router-dom'
import Navigation from './composant/navbar/Navigation';
import Authentifier from './composant/authenti/Authentifier';

function App() {
  return (
    <div className="App">
      
   <Routes>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Authentifier/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
    </div>
  );
}

export default App;
