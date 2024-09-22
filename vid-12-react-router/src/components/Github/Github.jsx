import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data =   useLoaderData()
//     const [data , setData] = useState([])
//   useEffect(()=>{
//     fetch('https://api.github.com/users/Mayankpaliwal09')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         setData(data)
//     })
//   } , [])


  return (
<>

<div className='text-center m-4 bg-gray-600 text-white p-5'>Github Followers : {data.followers}  <br /> Github Following : {data.following}
    <img src={data.avatar_url} alt="git picute" width={200} />
     </div>

</>
  )
}

export default Github


export const githubInfoLoader = async () =>{
  const response = await  fetch('https://api.github.com/users/Mayankpaliwal09')
    
  return response.json()
}