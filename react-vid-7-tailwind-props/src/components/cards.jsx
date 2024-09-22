import React from 'react'



// function Cards(props, {username}) { // so hum yaha [props] ki jagah direct destructure krliya

 // hum usernmae ko yhi par hi destructure [simple js hai ye ] krlete hai so that hame bar bar [props.username] na likhna pade direct [username] se kam ho jae 
function Cards({username , btnText="Submit"}) { 

    // console.log("props", props);
    // console.log(props.username);
    
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-9">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    {btnText} →
     {/* {btnText || "submit"} →   we can give that pipe || sign agar hame prop na mila to by default || pipe ke aage vala variable set krdega */}
    </button>
  </div>
</div>

  )
}

export default Cards