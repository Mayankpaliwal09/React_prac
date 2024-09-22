
// ye func bhi 2 parameters lega 
// 1st-> kya inject krna --> 2nd or kaha krna 
function customRender (reactElement , root){


    /*

    // <a href=""></a> --> ye bana rhe hai anchor tag with help of dom 


    // 1st hae dom element create krna hoga 
    // hame [reactElement -> object jo niche bnaya hai] ke through krna hai 
    const domElement = document.createElement(reactElement.type)  // a create krdega
    // abhi element khali hai 

    // abhi ham ek innerHTML bnaenge 
    domElement.innerHTML = reactElement.children

    // attributes bhi set krne hoge vo aaege [reactElement --> mei [props] se]
    domElement.setAttribute('href',reactElement.props.href) // href set krdiya 
    domElement.setAttribute('target',reactElement.props.target);  // target bhi set krdiya 


    // ab hame jo [root] hai [index.html] mei  add krna hai 
    root.appendChild(domElement)

*/

// above code mei ye dikt thi hame ar ek attibute ko select krna pad rha hai so [n attributes] means n times code llihna padta 


// ------------------------------------------------------------------------------------------------------------------

// so ham loop based code likhenge 

// 2 line same hi hogi 

const domElement = document.createElement(reactElement.type)

domElement.innerHTML = reactElement.children

// now yaha ham lagege loop 

// ye ham [reactElement] mei se props ko set krege yani attribute ko using loop
for (const prop in reactElement.props) {
   
    if(prop == 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop]) // ye actually [props] ko iterate krke property set kr rha hai
}

//ab vohi append krna hai domElement mei 
root.appendChild(domElement)


}




// so hum jo tag return krte hai ko actually mei react kaise compile ya dekhta hai 
// to react use ek tree format mei dekhta hai
const reactElement =  {
    // like jaise hamne ek [a] tag bheja us tag ki kuch properties hoti hai lik e[href , target , text ] et

    type: 'a'  , // it may be [div , span , p ] 

    props :{     // properties means uske andar kya kya attributes ho skte hai
        href: 'https://google.com',
        target:'_blank '
    }  ,
    children : 'click me to visit google'  //ye hamne ek element bnaya 
}


// hamne [index.html] file ka div select krliya jiski id=root hai
const root = document.getElementById('root')

// now hame is ko render krna hai 
// jaise hum function mei return krte the kuch tag ko [p ko h1 ko]
// so let say hame abhi ek [<a>] tag render krna hia 




// now ab hum chahte hai ki hamre pas ek [method ] ho jo render krde  [reactElement] custom elemnt jo bnaya hai usko / ya is element ko root ke andar add/inject krde 
// so hum ek function bna skte hai 

// that function takes 2 parameter 
// 1st -> kisko inject krna hai  [reactElement (jo ki ek <a> tag hai )] ko inject krna hai 
// 2ns --> kaha inject krna hai 
customRender(reactElement, root)  
//  ye custom render kam nahi krega bcoz hame ek function bnana hai usme DOM ki help se inject krna hoga
// lets make a function 







// this is our custom react that how actually react works 
// vaha bhi andar ek method likha hai jo continously element ko create krta rehta hia
// hamara element ek tree ki form mei bnta hai 
// and at last thats how it inject elements in html 











// now go to vite project usme dekhte hai actually mei kaise kam ho rha hai 