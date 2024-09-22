import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// app function kko yah define krliya or dekhte hai ab ye output deta hai ya nahi

function MyApp(){
  return(
    <div>
      <h1>THis is custom app in vite </h1>
    </div>
  )
}



const ReactElement =  {

  type: 'a'  , 
  props :{     
      href: 'https://google.com',
      target:'_blank '
  }  ,
  children : 'click me to visit google'  

}


// anotherElement

const anotherElement = (<a href="https://google.com" target='_blank'>visit google</a> )
// / now isko render krte hai 


// lets make third element 
// react have one method to create element --> [createElement] method 
// so that [createElement] ye bhi ek object leta hai 
// or ye func object deta hai kuch predefined syntax ko follow krke that we cannot change

// lets make a variable 

const anotherUser = "mayank paliwal"   // isko inject krna hai uske liye hame [thirdElement] mei pass krna hoga upar


const thirdElement = React.createElement(
  // first parameter is tag
  'a'  , // this is tag
  
  // second parameter it expect is properties or [props] we can say setAttribute vala feature h ye 
  {href :'https://google.com' , target:'_blank'} ,

  // third parameter is direct text expect krta hai 
  'visit me google from third element' ,

  // now we can directly use that 

  // last parameteris evaluated expression
  // last mei jab sara tree ban jata hai last mei [variable ] inject hona suru hote hai 
  anotherUser

  // hum yaha if() {} ye sab nahi likh skte bcoz end of the day ye convert hoga object mei or object mei hum conditionals thodi likhte hai 
)




ReactDOM.createRoot(document.getElementById('root')).render(
  



//   <>
//   {/* this  app is a function to kya hum is function ko yahi isi file mei define kr skte hai  */}
 
//  <App /> 

//  {/* // [MyApp] ko use krte ahi  */}
// {/* so agar function yaha define kiya to bhi chal rha hai */}
//  MyApp()  

// </>

// / --------------------------------------------------------------------------------------------------------

// {/* kya hum normal function call krke dekhe to kya chlega  */}

  //  MyApp() // so ye chal jaega 


// / --------------------------------------------------------------------------------------------------------

//  so hum bol rahe the ki jo hum niche function mei element likh rhe hai vo parse hoke tree format mei convert hota hai 

// function MyApp(){
//   return(
//     <div>
//       <h1>THis is custom app in vite </h1>
//     </div>
//   )
// } 

//   converted in tree format 
// const reactElement =  {
//   // like jaise hamne ek [a] tag bheja us tag ki kuch properties hoti hai lik e[href , target , text ] et

//   type: 'a'  , // it may be [div , span , p ] 

//   props :{     // properties means uske andar kya kya attributes ho skte hai
//       href: 'https://google.com',
//       target:'_blank '
//   }  ,
//   children : 'click me to visit google'  //ye hamne ek element bnaya 
// }

// so agar hum tree format yahi rkh de or direct [reactElement] ko yaha paste krke compiler ka ek step bacha de [kyu ki ye convert to tree mei ho hoga ]
// let see that work or not
 
/* <ReactElement/>  // ===> ye nahi chlega becouse </App > ye ek function that yaha expect krta hai ek function but tree d=format ek object hai or object aise thodi run hota hai  */
 
// object to direct print hota hai let try that 
  
// ReactElement   // ===> ye to abhi bhi nahi chla  or console pe error hai 

// so ye jo object hamne bnaya tha ye customReact that or iske liye hamne ek CustomRender code bhi likha tha isliye ye <a> tag create kiya becouse hame pta tha ki ye fi=unction kya parameter accept krega
 // yaha [render] to react ne likha hai so ye expect krta hai kuch parameters or arguments lega
 // so isliye ye nahi chla bcoz react have some syntax ki kis particular type ka object ye lega kya arguments hoge kya properties hogi etc 


// / --------------------------------------------------------------------------------------------------------

// now  lets make an [anotherElement] upar bnate hai uskme direct retturn krte hai ek <a>anchor tag ko or usko render krte hai

// anotherElement   // ==> so ye visible hoga or chlega means render ho gaya

// yaha hamne koi <anotherElement /> use nahi kiya ya anotherElement()  becouse ye sahi syntax nahi hai 

// so ye sirf ek object mei convert hoga that all 


// / --------------------------------------------------------------------------------------------------------

// but ye [reactElement] jo hamara customElement ka object hai ye kyu nahi chal rha afterall vo bhi to ek object hai 

// bcoz uska syntax thik nahi hai names  becouse customReact mei hamne khud se bnaya tha ki hamari ye [properties] hogi  loop lagaenge etc
// so jisne reactRender bnaya hoga vo bhi kuch expect kr rha hoga 

// that fine
// / --------------------------------------------------------------------------------------------------------

// so hamare pas koi tarika hai ki React kis tarha ka props use kr rha hai etc 

// so we make thirdElement and let see kaise bnta hai 
// is element ko hum react ke hisab se bnaenge 
// upar bnaenge third element ko 

 
// now upar [thirdElement] jo bnaya hai usko render krte hai 

// thirdElement     // ==> ab ye render ho gaya 


// / --------------------------------------------------------------------------------------------------------

// now ab chalte hai [App.jsx] mei or vaha dekhte hai ki hum [variables kaise inject krege ] bcoz end of the day ye JSX hai [x is html and js is javascript] 
// so we see variables or javascript kaise inject hogi let see 

// lets move in [App.jsx]

//  <App />


 // / --------------------------------------------------------------------------------------------------------

// now lets make an [anotherUser] variable usko inject krte hai let see kaise krte hai [React.createElement -> ka 4th parameter hota hai variables [means last mei variables inject hote hai]]

thirdElement
//  hamra variable inject ho jaega 
)
