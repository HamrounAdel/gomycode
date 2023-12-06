import React, { useState } from 'react'
import './register.css'
import { useNavigate,Link} from 'react-router-dom'
import {registerUser} from '../../api/apiUser'
function Register() {
  const navigate = useNavigate()
  const [name,setName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[adress,setAdress] = useState('')
  const [role, setRole] = useState('')
  const [specialite,setSpecialite] = useState('')
  const[numOrder,setNumOrder] = useState('')
  const [phone,setPhone] = useState('')
  const [birthday,setBirthday] = useState('')
  const[show,setShow] = useState(false)
  const determineRoleValue = () => {
    return show ? 'Doctor' : 'Patient';
  };

  const handelregister = async () => {
    const roleValue = determineRoleValue();
    const value = {
      name,
      lastName,
      email,
      password,
      role: roleValue,
      adress,
      birthday,
      specialite,
      numOrder,
      phone,
    };

    await registerUser(value);
    navigate('/login');
  };
 
  const handelShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <header  className='headerhome'>
  <div className='menu'>
    <ul>
      <li>
      <a><span  style={{color:'aqua'}}>Rendez-vous Medical</span></a>
       </li>
    </ul>
      
     </div>
    <div className="menu">
     
      <ul>
      <li>
         <Link to='/'><a >Acceuil</a></Link> 
        </li>
        <li>
         <Link to='/login'><a >Se connecter</a></Link> 
        </li>
      
      </ul>
     
    </div>
  </header>
    <div className='bodyRegester'>
    <div className='logss'>

</div>
    <div className="">
      
    <div className="registration_form">
      <div className="title">Sign up</div>
      <form>
        <div className="form_wrap">

          <div className="input_grp">

            <div className="input_wrap">
              <label htmlFor="fname">First Name</label>
              <input type="text"  
               value={name}
               onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="input_wrap">
              <label htmlFor="lname">Last Name</label>
              <input type="text"  
               value={lastName}
               onChange={(e)=>setLastName(e.target.value)}/>
            </div>

          </div>

          <div className="input_wrap">
            <label htmlFor="email">Email </label>
            <input type="text"  
             value={email}
             onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input_grp">
            <div className="input_wrap">
              <label htmlFor="password">Password</label>
              <input type="password" 
               value={password}
               onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="input_wrap">
              <label htmlFor="date">Date de naissance</label>
              <input type="date" 
               value={birthday}
               onChange={(e)=>setBirthday(e.target.value)} />
            </div>
            </div>
            
          <div className="input_wrap">
            <label htmlFor="city">Adress</label>
            <input type="text"  
             value={adress}
             onChange={(e)=>setAdress(e.target.value)}/>
          </div>

          <div className="input_wrap">
            <label htmlFor="country">Phone</label>
            <input type="text"
             value={phone}
             onChange={(e)=>setPhone(e.target.value)} />
          </div>

          <div className="input_wrap">
            <label >Role</label>
            <ul>
              <li>
                <label className="radio_wrap">
                  <input
                    type="radio"
                    name="role"
                    value="Patient"
                    className="input_radio"
                    defaultChecked=""
                    onChange={() => {
                      setRole(determineRoleValue());
                      setShow(false)
                    }}
                  />
                  <span>Patient</span>
                </label>
              </li>
              <li>
                <label className="radio_wrap">
                  <input
                    type="radio"
                    name="role"
                    value="Doctor"
                    className="input_radio"
                    onChange={() => {
                      setRole(determineRoleValue());
                      setShow(true)
                    }}
                  />
                  <span onClick={()=>handelShow()}>Doctor</span>
                </label>
                
               
              </li>
            </ul>
          </div>
          
          {show && (<section> <div className="input_wrap">
            <label htmlFor="country">specialite</label>
            <input type="text" 
             value={specialite}
             onChange={(e)=>setSpecialite(e.target.value)}/>
          </div>
          <div className="input_wrap">
            <label htmlFor="country">Numero d'order</label>
            <input type="text"  
             value={numOrder}
             onChange={(e)=>setNumOrder(e.target.value)}/>
          </div></section> )}<br/>

          <div className="input_wrap">
            <input
              type="button"
              defaultValue="Register Now"
              className="submit_btn"
              onClick={()=>handelregister({name,lastName,email,birthday,password,role,adress,specialite,numOrder,phone})}
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Register
