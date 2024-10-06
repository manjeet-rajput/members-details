import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useEffect , useState} from 'react';
import Swal from 'sweetalert2';


function Editdta() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  

  const{id} = useParams();


  useEffect(()=>{
    axios.get(`https://66c43371b026f3cc6cee54e1.mockapi.io/api/v1/fruit/${id}`)
    .then((res)=>{setName(res.data.name)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setMobile(res.data.mobile)
    })
  },[])

const changedata=()=>{
  axios.put(`https://66c43371b026f3cc6cee54e1.mockapi.io/api/v1/fruit/${id}`,{
    name:name,
    email:email,
    password:password,
    mobile:mobile

  })
  Swal.fire({
    title: "User Edit Successfully",
    text: "User Add",
    icon: "success"
  });
    
}

  return (
    <>
      <form className='editdetailsform' action="">
        <h4>Edit Your Details</h4>
        <div className="form-group">
        <label for="exampleInputEmail1">Edit Your Name</label><br />
        <input placeholder='sandeep kumar'type="text"onChange={(e)=>setName(e.target.value)} value={name} />
        </div><br />
        <div className="form-group">
        <label for="exampleInputEmail1">Edit Your Email</label><br />
        <input placeholder='sandeepkumar@gmail.com'onChange={(e)=>setEmail(e.target.value)} value={email}  type="text" />
        </div><br />
        <div className="form-group">
        <label for="exampleInputEmail1">Edit Your Mobile No.</label><br />
        <input placeholder='999999999999'onChange={(e)=>setMobile(e.target.value)} value={mobile}  type="text" />
        </div><br />
        <div className="form-group">
        <label for="exampleInputEmail1">Edit Your Password</label><br />
        <input placeholder='sandeep#1267' type="text" onChange={(e)=>setPassword(e.target.value)} value={password}  />
        </div><br />
        <button type='button'  onClick={changedata} className='btn btn-success'>Save</button><br/>
        <Link to='/'><button type='submit' className='btn btn-danger'>Show List</button></Link>
      </form>
    </>
  )
}

export default Editdta
