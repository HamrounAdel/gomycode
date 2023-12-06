import React from 'react'

function Doctor({el}) {
  return (
    <div>
         <p>Name:{el.name}</p>
        <p>lastName:{el.lastName} </p>
        <p>Email:{el.email} </p>
        <p>Adress:{el.adress}</p>
        <p>Telephone:{el.phone} </p>
        <p>Speciality:{el.specialite}</p>
    </div>
  )
}

export default Doctor
