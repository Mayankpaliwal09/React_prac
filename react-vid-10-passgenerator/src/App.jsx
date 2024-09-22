import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  // length change ho rhi thi uske liye state change kae liye 
const [length , setLength] = useState(8)

// state ki number allowed hai ya nahi 
const [numAllowed, setNumAllowed] = useState(false)

// state ki chracter allowed hai ya nahi 

const [charAllowed , setCharAllowed] = useState(false)

// input field mei password bhi to hai by def [we see ki password yaha kaise aaega ]

const [password , setPassword] = useState("")

// useref hook

const passRef =  useRef(null)  // hum har input ke andar ref pass krskte hai jo ki refrence ka track rkhega 


// PASSWORD GENERATOR METHOD BNAEGE 
// ab ye function [numbers , chracters] asb ke liye chale ga to k=hum kya aisa kre ki ye passGenerator sabke liye chale means callback ho 
// so we hav [ usecallback(fn,dependencies)]

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  // ye data hai jisse ham password bnaenge
  
  // agar no allowed hai to str mei ye append krdege
  if (numAllowed) {
    str += "0123456789"
  }
  
  // agar character allowed hai to str mei ye append krdege
  if(charAllowed){
    str += "!@#$%^&*()~ "  
  }

  // ab ek loop chalake [str] mei se random value nikalenge ab ye loop depende krega gmare [length] variable par jitni length utna loop chlega or us length ki value nikalega

   for(let i= 1; i<=length ; i++){
    // ab hum password bnaenge 
    let char = Math.floor( Math.random()*str.length+1) 
    // abhi yaha hamare pas string ki index value aai hai na ki ek character so hame character nikalna padega 

    pass += str.charAt(char)

   } 

   setPassword(pass)
},[length, numAllowed , charAllowed , setPassword])


// copyToClipBoard --> method 

const copyPasswordToClipboard = useCallback(()=>{
 passRef.current?.select();
 passRef.current?.setSelectionRange(0,100)   // ye range dedi select krne ki 
  window.navigator.clipboard.writeText(password)

}, [password])



useEffect(()=>{
  passwordGenerator()
} , [length , numAllowed , charAllowed , passwordGenerator , setPassword])

// passwordGenerator()


  return (
    <>


<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

<h1>Password Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input
     type="text" 
     value={password}  // state mei jo password generate kiya hai vo hi value dege
     className='outline-node w-full py-1 px-3'
     placeholder='password'
     readOnly
     ref={passRef}
     />

     {/* // ab ek button lege  for copy */}

     <button
     onClick={copyPasswordToClipboard}  // ek method banenge ji copy krega text ko 
     className='outline-node bg-blue-500 text-white px-4 py-0.5'> copy </button>


  </div>

<div className='flex text-sm gap-x-2'>

  <div className='flex items-center gap-x-1'>
  <input
   type="range"
   min={6}
   max={100}
   value={length}
   className='cursor-pointer'
   onChange={(e)=>{setLength(e.target.value)}}
   />
   <label htmlFor="">Length:{length}</label>
  </div>

{/* numbers ke liye check box bnaenge */}

<div className='flex - items-center gap-x-1'>
  <input type="checkbox"  
  defaultChecked={numAllowed}
  id="numberInput"
  onChange={()=>{setNumAllowed((prev)=>!prev)}}
  />
  <label htmlFor="">Numbers</label>
</div>


{/* characters ke liye check box bnaenge */}
<div className='flex - items-center gap-x-1'>
  <input type="checkbox"  
  defaultChecked={charAllowed}
  id="characterInput"
  onChange={()=>{setCharAllowed((prev)=>!prev)}}
  />
  <label>Character</label>
</div>

</div>

</div>
       
       
        {/* <h1 className='text-4xl text-center text-white'>Password-Generator</h1> */}
    </>
  )
}

export default App
