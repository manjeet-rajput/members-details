import axios from 'axios'
import React from 'react'


function Deletdata(props) {
const delet=()=>{
    axios.delete(`https://66c43371b026f3cc6cee54e1.mockapi.io/api/v1/fruit/${props.id}`)
    .then((response) => {
      console.log(response.data)
      })
}



  
  return (
    <div>
      <button onClick={delet} type='submit' class="btn btn-danger">Delet</button>
    </div>
  )
}

export default Deletdata
