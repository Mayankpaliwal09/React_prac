import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Cards from './components/cards'

function App() {
  const [count, setCount] = useState(0)

 let  myObj = {
    username : "mayank",
    age:21
  }

  let arr = [1,2,3]
  return (
    <>
 
 <h2 className='bg-yellow-300 mb-10 , p-5 , text-5xl , text-black , rounded-2xl '>This is h2</h2>

      <h1 className='bg-red-600 , text-6xl , text-black , p-5 , rounded-3xl , border-orange-400'>Tailwind CSS </h1>
      
      {/* yaha jab hum components/cards ko use krte hai to yaha se hum values pass kr skte hai jo value hum yshs se pass krege vo hi hame props mei show hogi means capture hogi */} 
     {/* <Cards channel="mayank paliwal" /> */}

     {/* now ab hum agar 2 value ya array or ya object dedete to kya hota   */}
     {/* <Cards channel="mayank paliwal"  myObj={name:"mayank"} /> */}  
     {/* so we cannot do that ki hum diectly multiple values de ske is tarah se  */}
   
   
   {/* ---------------------------------------------------------------- */}
   
   {/*  seo lets make a object and directly use that or dekhte hai kam krta hai ya nahi  */}
   {/*   hamne upar ek object bna diya hai now lets use that using variable*/}

   {/* <Cards channel="mayank paliwal"  obj = myObj />    */}
     {/* so hum esa bhi nahi kr skte */} 
  
{/* so ye allowed isliye nahi hai [jab humne customReact bnaya tha] ustime hamne jab object banaya tha to us object mei ek-2 value rkhi jati thi [usme hum define krtte the --> 1st element define krta hai card dena hia , 2nd define krta hai createElement / propserties , last mei final value likhte the]   */}
{/* so ye sab variabl mei pass krna padega */}

{/* ---------------------------------------------------------------- */}

{/*  so use krte hai object ko  agr hame use use krna hai to hame ye sab variable mei pass krna padega [{}]  curly braces se hum variable use krte hai*/}
{/* hum ek array bhi pas krke dekhte hai  */}

{/* <Cards channel="mayank paliwal"  obj = {myObj} arr={arr} />  */}


{/* so hum ek component se dusre component mei value pass kr skte hai bas hame [props] argument ko pass krna padega  */}


{/* ---------------------------------------------------------------- */}

{/* ab dekhte hai ki ham alag alag cards mei diff values kaise use kr skte hai  */}
{/* for-ex - ek carm mei "mayank" chaiye ,,,,, next card mei "raman" chaiye  how to do that becouse ultimately hamare pas card componet ek hi toh hai */}

{/* ab hamare card mei usernae vali chije dekhte hai  */}
{/* hamra jo component function mei hum [props] pass kr rhe hai vo ek object hai  */}

{/* so hum is username ko [Cards.jsx] component mei capture krege using [props.username] jaha bhi use krna hai  */}
<Cards username="mayank paliwal" btnText = "Click me" /> 


<Cards username="raman panchal"  btnText="visit me"/> 





    </>


  )
}

export default App
