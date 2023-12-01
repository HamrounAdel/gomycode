import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
function Navigation({auth,logout}) {
  return (
    <div className='bodynav'>
    <nav className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div class="nav-title">
      <span>{auth.name}</span>
      </div>
    </div>
    
    <ul class="nav-list">
     
      {auth.role==="admin"?(<>
      <a href="#">Acceuil</a>
      <a href="#">Doctor</a>
      <a href="#">Patient</a>

      </>) :auth.role==="Patient"?(<>

      <li><a ><Link to=''>Acceuil</Link></a></li>
      <li><a ><Link to=''>Specialite</Link></a></li>
      <li><a ><Link to=''>Prendre un RDV</Link></a></li>

      </>):
        (<><li><a ><Link to=''>Acceuil</Link></a></li>
        <li><a ><Link to=''>consulter les RDVs</Link></a></li>
        <li><a ><Link to=''>Patient</Link></a></li></>)}

         <li><a  onClick={()=>logout()}>Deconnecte</a></li> 
      
    </ul>
  
  </nav>
  </div>
  )
}

export default Navigation