
import './App.css'
import Abc from './components/Abc'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     
     <h1>React Context Api</h1>
      <Profile/>
        <Login/>
      
      

    </UserContextProvider>
  )
}

export default App
