
// import krege mayank function ko
import Mayank from "./mayank"


function App() {
  

  return (
  //  <h1>THIS VITE REACT</h1>

  // vite mei jab component bnao uski extension honi chaiye [.jsx] but in basic react we use [.js]
  //and function shoud be in uppercase
   

    // yaha error isliye dega kyu ki hum ek hi element export kr skte hai
    //  this is rule of jsx ki hum ek element hi return kr skte 

    // so hum ek <duv> bnake usme multiple element return kr skte hai bcoz ultimately hum ek hi element return kr rhe hai uske andar hum diff element to return kr his kte hai
    
    // <div>
    //   <Mayank/>  
    // <h1>THIS IS VITE REACT</h1>
    // <p>this is paragraph</p>
    // </div>

    // this is commom problem in html or react  ki hum chijo ko ek <div> ke andaar wrap kr rha hai 
    //so unhone eventually kya kiy abol aki aap empty <> </> tag return kr skte hp isko hamne bola [fragment]

    // this empty tag is fragment 
    <>   
     <Mayank/>  
     <h1>THIS IS VITE REACT</h1> 
      <p>this is paragraph</p>
    </>
  )
}

export default App


// ye hi kam basic-react se bhi krte hai 


// what we learn
// those functions we are making like [mayank.js] these are components
// components function shoud be in capital letters
// file name is also in capital [but not necessary we can give file name in small letters but we should name in cpitals letters]
// if we want to render multiple elements so we should use fragments <></>
// vite project mei components name should save with [.jsx] extension [luch library force kregi hum name [.jsx] se rkhe ]