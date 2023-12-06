import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/userSlice';
import { searchDoctors } from '../../../api/apiUser';
import Doctor from '../../doctor/cardDoctor/Doctor';
import './acceuilPat.css'
function AcceuilPat() {
  const auth = useSelector(state => state.User)
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const [searchSpeciality,setSearchSpeciality]=useState('')
   const [searchAdress,setSearchAdress]= useState('')
   const [show,setShow]=useState('false')

   const handelShow = () => {
    setShow(!show);
  };


  const handleSearch = async () => {
    try {
      const data = await searchDoctors({ name: searchTerm ,
                                         specialite: searchSpeciality,
                                         adress: searchAdress });
      dispatch(setUser(data));
      handelShow()
    } catch (error) {
      console.error('Error searching doctors:', error);
    }
  };
  
  return (
    <div>
      
      <div className='log'>
        <div>
      <h1 > Trouvez un rendez-vous </h1>
      <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      <select value={searchAdress} onChange={(e) => setSearchAdress(e.target.value)}>
  <option value="">Sélectionnez une adresse</option>
  <option value="mednine">Mednine</option>
  <option value="tunis">Tunis</option>
  <option value="gabes">Gabès</option>
  <option value="Sfax">Sfax</option>
  <option value="ben Arous">ben Arous</option>
  <option value="Nabel">Nabel</option>
  <option value="Benzerte">Benzerte</option>
</select> 
<select value={searchSpeciality} 
onChange={(e) => setSearchSpeciality(e.target.value)}>
  <option value="">Sélectionnez une spécialité</option>
  <option value="Géneraliste">Géneraliste</option>
  <option value="Pédiatre">Pédiatre</option>
  <option value="Dentiste">Dentiste</option>
  <option value="Orthopédiste">Orthopédiste</option>
  
</select>

     
      <button onClick={handleSearch}>Rechercher </button>
      
      {/* 
      {show &&  <div className='grid-container'>
      {auth.filter((el)=>auth.role==='Doctor' ).filter((el)=>(el.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
      && (el.specialite === searchSpeciality) &&  (el.adress === searchAdress))
      .map((el)=> (<Doctor el = {el}/>))}
    </div>} */}

      </div>
      </div>
      </div>
    </div>
  )
}

export default AcceuilPat
