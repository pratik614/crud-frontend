import React from 'react'
import { useState } from 'react'
import { editUser, getUser } from '../service/Api';
import { useNavigate, useParams } from 'react-router-dom';
import "../style/adduser.scss"
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';



const defaultvalue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const Edituser = () => {
    const [user, setUser] = useState(defaultvalue);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserdata()
    }, []);

    const loadUserdata = async () => {
        const response = await getUser(id);
        setUser(response.data[0]);
        console.log(response.data[0])
    }


    const valueChange = (e) => {

        console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });



    }

    const editUserdetail = async (e) => {
        e.preventDefault();
        await editUser(user, id);
        toast.success("user edited succesfully");
        navigate("/all");

    }

    return (
        <form  >
            <h2>Edit user</h2>
            <div>
                <label>name</label>
                <input onChange={(e) => valueChange(e)} type="text" required name='name' value={user.name} />
            </div>
            <div>
                <label>username</label>
                <input onChange={(e) => valueChange(e)} type="text" required name='username' value={user.username} />
            </div>
            <div>
                <label>email</label>
                <input onChange={(e) => valueChange(e)} type="email" required name='email' value={user.email} />
            </div>
            <div>
                <label>phone</label>
                <input onChange={(e) => valueChange(e)} type="tel" required name='phone' value={user.phone} />
            </div>

            <button onClick={(e) => editUserdetail(e)} type='submit'>Edit user</button>
        </form>
    )
}

export default Edituser

