

import Mayank from "./mayank"



function App() {
 
// lets make a username 
const username = "mayank " // so ye username niche <h1> mei kaise aaega 
  return (
     <>
       <Mayank/>
       
       {/* <h1>this is vite project</h1> */} 

       {/* // isko run krege to  username as it is aa jaega isne to mayank print hi nahi kiya  */}
       {/* <h1>My name is username</h1>   */}


            {/* so we use {} curly braces this is syntax to print variables it is just like [ `${}`] -> js meiuse krte the  */}
         {/* so bhi {} curly braacesm mei hoga it treat as a variable */}
         <h1>My name is {username}</h1>   {/* ab hamra name print ho jaega  */}
     {/*  {username --> this is called expression //  evaluated expression  // means js ka evaluation hone ke bad ka final outcome print hoga }*/}

{/* ---------------------- */}

{/* so if {} here we write js to kya ham kya evaluation likh skte hai like [if-eles ] */}

{/* <h1>My name is {if(true) username}</h1>  ==> that not work becouse curly braces mei hum evaluated ecpression ka outcome hi print hota hai  */}


{/* ye sab hum nhi likh skte why let see in main.jsx */}


     </>
  )
}

export default App
