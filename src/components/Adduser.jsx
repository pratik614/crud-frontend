import React from 'react'
import { useState } from 'react'
import { addUser } from '../service/Api';
import { useNavigate } from 'react-router-dom';
import "../style/adduser.scss"
import { toast } from 'react-hot-toast';


const defaultvalue = {
  name: "",
  username: "",
  email: "",
  phone: ""
}

const Adduser = () => {
  const [user, setUser] = useState(defaultvalue);
  const navigate = useNavigate();

  const valueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });  //... doens't let data to overlap
    console.log(user);


  }

  const addUserdetail = async (e) => {
    e.preventDefault();
    await addUser(user);
    toast.success("user added successfully");
    navigate("/all");

  }

  return (
    <form onSubmit={(e) => addUserdetail(e)} >
      <h2>add user</h2>
      <div>
        <label>name</label>
        <input onChange={(e) => valueChange(e)} type="text" required name='name' placeholder='Name' />
      </div>
      <div>
        <label>Username</label>
        <input onChange={(e) => valueChange(e)} type="text" required name='username' placeholder='Username' />
      </div>
      <div>
        <label>Email</label>
        <input onChange={(e) => valueChange(e)} type="email" required name='email' placeholder='Email' />
      </div>
      <div>
        <label>Phone</label>
        <input onChange={(e) => valueChange(e)} type="tel" required name='phone' placeholder='Phone' />
      </div>

      <button type='submit'>add user</button>
    </form>
  )
}

export default Adduser
