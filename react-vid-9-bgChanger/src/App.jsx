import { useState } from "react"


function App() {
// ek state bnate hai jo colour variable hoga vo UI mei bhi toh change hoga 
const [color, colorChange] = useState("red");  // default colour black diya 



{/* // state ko ab implement krege usko implement krne k liye hum style use krege */}
        {/* {{}} syntax for inline css in react */}

  return (
    <div className="w-full , h-screen ,duration-200"
    // here color is variable 
    style={{backgroundColor: color}}  >    
     
    
  {/* ab ek div leke hum bar bnaenge usme colors/ button type dege  */}
      <div className="fixed flex flex-wrap , justify-center , bottom-12 , inset-x-0 , border-black  ">
       

       {/* andar ek bar bnaenge usme hum buttons bnaenge colors ke */}
 
           <div className="flex flex-wrap justify-center gap-4 shadow-xl , bg-white , rounded-2xl , px-3 , py-2 , border-black" style={{backgroundColor:"black"}}>
               
               {/* button bnaenge or usko bhi style krege */}
               <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl rounded-2xl"
              style={{backgroundColor:"orangeRed"}}
              onClick={()=> colorChange("orangeRed")}
              >
                orangeRed</button>
               

                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"red"}} 
              onClick={()=> colorChange("Red")}
              >
                Red</button>




                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"green"}} 
              onClick={()=> colorChange("green")}
              >
                Green</button>




                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"magenta"}} 
              onClick={()=> colorChange("magenta")}
              >
                Magenta</button>




                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"purple"}} 
              onClick={()=> colorChange("Purple")}
              >
                Purple</button>




                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"white"}}
              onClick={()=> colorChange("White")}
              >
                White</button>


                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"blue"}}
              onClick={()=> colorChange("blue")}
              >
                blue</button>


                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"olive"}}
              onClick={()=> colorChange("Olive")}
              >
                olive</button>





                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"brown"}}
              onClick={()=> colorChange("brown")}
              >
                brown</button>




                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:"darkblue"}}
              onClick={()=> colorChange("darkBlue")}
              >
                darkblue</button>

                <button className="outline-none , px-2 , py-1 text-black text-xl , shadow-2xl , rounded-2xl"
              style={{backgroundColor:" darkgreen"}}
              onClick={()=> colorChange(" darkgreen")}
              >
                Darkgreen</button>
           </div>
      </div>


   </div>
  )
}

export default App
