import axios from 'axios'

export const  getAllRDV=async()=>{
    const {data} = await axios.get('http://localhost:5003/RDV/getRDV')
    return data
}

export const addRDV=async(values)=>{
    const ajoutContact= await axios.post('http://localhost:5003/RDV/addRDV',values)
}

/*
export const putRDV=async(id,values)=>{
    const updatContact= await axios.put(`http://localhost:5002/contact/updatContact/${id}`,values)
}*/

export const deletRDV=async(id)=>{
    const removContact= await axios.delete(`http://localhost:5003/RDV/deletRDV/${id}`)
}
/*
export const getUniqueRDV=async(id)=>{
    const {data}= await axios.get(`http://localhost:5002/contact/unique/${id}`)
    return data
}*/