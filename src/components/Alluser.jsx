import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { delUser, getAlluser } from '../service/Api';
import { Link } from 'react-router-dom';
import "../style/alluser.scss"
import { toast } from 'react-hot-toast';

const Alluser = () => {
    const [users,setUsers] =useState([]);
    useEffect(()=>{
     getallUserData();
    },[]);
    const getallUserData= async()=>{
     let response =await getAlluser();
     setUsers(response.data);
    };

    const deleteUser= async(id)=>{
    await delUser(id);
    toast.success("Deleted successfully");
    getallUserData();

    }
  return (
    <table>
        <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        </tr>
        </thead>
        <tbody>
        
            {
                users.map(user=>(
                    <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button type='submit'><Link to={`/edit/${user._id}`}> Edit</Link> </button>
                        <button className='btn' onClick={()=>deleteUser(user._id)} type='submit'>Delete</button>
                    </td>
                    </tr>
                ))
             }
        </tbody>

    </table>
  )
}

export default Alluser
