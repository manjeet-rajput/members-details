import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Deletdata from './Deletdata'


function Crud() {
const[user , setUser] = useState([])
  useEffect(()=>{
    axios.get(`https://66c43371b026f3cc6cee54e1.mockapi.io/api/v1/fruit`)
    .then((res)=>{setUser(res.data)})
    
  },[])

  return (
    <>
      <div className='btndiv'>
     <Link to="/add-data"><button className='btn btn-info' type='butto'>Add User</button></Link>
    </div>
  <table class="table">\
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
      {user.map((item)=>(
       <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
      <td>   
       <Deletdata id={item.id}/>
        <Link to={'edit-data/'+item.id}><button type='button'class="btn btn-warning">Edit</button></Link>
        </td>
      </tr>
      ))}
   
  </tbody>
</table>
    </>
  )
}

export default Crud
