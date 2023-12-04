import React from 'react'

import './acceuilPat.css'
function AcceuilPat() {
  
  return (
    <div>
      
      <div className='log'>
        <div>
      <h1 > Trouvez un rendez-vous </h1>
      <div>
        <input type="text" 
        placeholder="par specialite"/>
        <input type="text" 
        placeholder="par name"/>
      <button>Rechercher </button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AcceuilPat
