import axios from "axios";



export const addUser =(data)=>{
  try {
    return  axios.post("http://localhost:8000/add",data)
  } catch (error) {
    console.log("error while adding data",error);
  }
}

export const getAlluser =async()=>{
    try {
        return  await axios.get("http://localhost:8000/all");
    } catch (error) {
        console.log("error while getting data");
    }
}

export const getUser= async(id)=>{
    try {
      return  await axios.get(`http://localhost:8000/${id}`)
    } catch (error) {
        console.log("error while calling api",error);
    }
}
export const editUser=async(user,id)=>{
    try {
       return await axios.put(`http://localhost:8000/${id}`,user); 
    } catch (error) {
        console.log("error while adding data",error)
    }
}

export const delUser =async(id)=>{
try {
   await axios.delete(`http://localhost:8000/${id}`); 
} catch (error) {
   console.log("error while calling delete api",error) 
}
}