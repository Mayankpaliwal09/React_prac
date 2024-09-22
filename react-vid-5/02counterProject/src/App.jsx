import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 2;

  // addValue function 

  // const addValue = ()=>{ }  

    
// console.log("clicked" , counter)
// counter = counter+1

// yaha ham click kr rhe hai but counter update bhi ho rha hai console par but screen par counter=5 hi aa rha hai why ??
// yaha aa ta hai measure problem is [ui] update 
// starting mei bat hui thi ek button pe click krte hi 5 jaagh chije updateho rahi hai vo hi contrl mainly react krna chah rahi hai 
// ui ke andar kab kya chij update hogi vo sab decide krta hai react 
// so isiliye react  - react[pratikirya]  krti hai variable update mei 


// so let say ye counter variable 4-5 jagah use hota agr ye kam js se krte toh hame 4-5 jagah selectors use krne padte [getElementbyID , by class ] etc
// so ye problem solve krne k liye react ne kaha [aap ko jo data lana hai lao , jo change krna hai kro ] but agar UI mei kuch change hoga to vo react krega 

// so react provide some methods we called them [hooks] {hooks is nothing just a functions provided by react } so inhi hooks ke according hi data change hoga 
// so we use hooks to change the data in UI
// we have lots of hooks [in react libraary github mei jake dekh skte hai {react -> https://github.com/facebook/react/tree/main/packages/react/src}]

// so we import [import { useState } from 'react'] --> to use hooks from react yaha hum [useState]hook ko import kr rhe hai we can also import diff hooks like [import { useState , useEffect ... } from 'react'] aise diff hooks import kr skte hai 

      
// --------------------------------------------------------------------

// now let use {useState } - ye useState hook state ko change krne ke liye responsible jai  [change means values ko change nahi] balki jo change hua hai usko propagate krta hai UI mei means UI ka state change krta hai  means DOM ke andar 

//how to use  useState  --> useState()

 // so yaha imp chij hai ki ek variable[here variable is {counter} jo upar bnaya tha ] ke andar hum default value kya dena chahte hai we can give [string , empty array , object or even function]
//  useState(true , false , " " , 'String' , [empty array], [ object] , function())
  
// so hum yaha default value dege i.e is 15  --> useState(15)

// so that useState hame kuch dega means issse nikal ke kuch variable lege means 
// so ye UseState hame 2 chij deta hai array ke form mei to ue variable ke format mei store krege 
let [counter , setCounter ] = useState(15) // aise krege or ye 2 chij deta hai
 // so 0th index par [counter] jo hai ye simply variable hi hai jo update hoga ye variable hi hai 
 // 1st index par jo [setCounter] hai ye ek Function hai jo [counter] ko update krne mei help krega 
 // so jaise hi change hua to pure [ui] mei jaha bhi [counter] hoga vo update ho jaega 




const addValue=()=>{

  // ab counter aise to update nahi hoga 
  // counter = counter+1 

  /// so ye [counter] update kaise hoga 
  // / so isko update krne k liye jo[setCounter] function bnaya tha usko callkrna padega 
  // vo [setCounter] function  [counter] ko update krega

  // so lets call [setCounter] function and see ki updat hua ya nahi UI mein
//  counter variable ko [let] se banenge 



//   counter = counter+1 
//  setCounter(counter)  // ye set counter leta hai [newValue] means jo new value hum set krna chahte hai it may be store in variable or we can directly write here also 
//  console.log(counter)




  // setCounter(counter+1)  // we can use that also 

  // so all set thats how [useState] hook working fine 

  // hum[counter] or [setCounter ] ye kuch bhi name de skte hai


  //  // --------------------------------------------------------------------

//  ab hum [setcounter] ko multipe time likhte hai and let see ki hamari value ek bar update hogi ya multiple times

// setCounter(counter+1)
// setCounter(counter+1)
// setCounter(counter+1)
// setCounter(counter+1)
// setCounter(counter+1)

// to yaha value ek bar hi update hogi becouse [useState()] kya karta hai ki jitne updates bhejne hai UI mei vo [patches] mei bhejta hai  even in variable [isliye fibre aaya / diffind algo] 

//so yaha basically ye sab ek hi counter ko update kar rha hai  [yaha in sab UI change req ka patch banega ] oe ye sab dekhe ge ki same hi kam hai so ye [15] ti [16] ko hi bar bar update kr rha hai 

// so if we want ki ye [setCounter] jitne times call ho utna hi increment ho 
// so ye [states hoti hai ] ye actually ek function hote hai or ye ek call back accept krte hai 
// toh we can pass a callBack [prevCounter] ye  hame existing [counter] value lake dega and update krega  [means last updted state lake dega]

setCounter((prevCounter)=> prevCounter+1)
setCounter((prevCounter)=> prevCounter+1)
setCounter((prevCounter)=> prevCounter+1)
setCounter((prevCounter)=> prevCounter+1)

//  or we can write that also in below way 

setCounter(prevCounter=> prevCounter+1)

}  

  

//  // --------------------------------------------------------------------

// similarly we make a function [removeValue] jo remove krega

const removeValue = ()=>{
   
  setCounter(counter-1)
  
  }
  
  return (
    <>


       <h1>Mayank paliwal</h1>

       {/* ek variable mei counter value rkhege becouse hame dynamic banana hai butoon click krene par increase or decrease ho */}
       <h3>Counter value : {counter}</h3> 

        {/* addValue ka ek function bnate hau jo click krne par add krega value   */}
       <button onClick={addValue}>Add value {counter}</button>
       <br />
       <br />
       <button onClick={removeValue}>remove value {counter} </button>

       <p>this is p tag {counter}</p>
    </>
  )
}

export default App
