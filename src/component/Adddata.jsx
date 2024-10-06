import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Adddata() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  



const postdata=(e)=>{
  e.preventDefault();

  axios.post(`https://66c43371b026f3cc6cee54e1.mockapi.io/api/v1/fruit`,{  
      name:name,
      email:email,
      password:password,
      mobile:mobile
    
  })
  Swal.fire({
    title: "User Add Successfully",
    text: "User Add",
    icon: "success"
  });
}
  return (

    <>
      <form onSubmit={postdata} className='editdetailsform' action="">
        <h4>Add User</h4>
        <div className="form-group">
        <label for="exampleInputEmail1"> Set Name</label><br />
        <input placeholder='sandeep kumar' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div><br />
        <div className="form-group">
        <label for="exampleInputEmail1"> Set Email Address</label><br />
        <input placeholder='sandeepkumar@gmail.com' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div><br />
        <div className="form-group">
        <label for="exampleInputEmail1"> Set Your Mobile No.</label><br />
        <input placeholder='9999999999' type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
        </div><br />
        <div className="form-group">
        <label for="exampleInputEmail1">Set Your Password</label><br />
        <input placeholder='sandeep#1267' type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div><br />
        <button type='submit' className='btn btn-success'>Save</button><br/>
        <Link to='/'><button type='submit' className='btn btn-danger'>Show List</button></Link>
      </form>
    </>
  )
}

export default Adddata
