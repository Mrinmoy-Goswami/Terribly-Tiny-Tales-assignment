import LoginPage from './Pages/LoginPage'
import ProfilePage from './Pages/ProfilePage'
import { Route,BrowserRouter,Routes} from 'react-router-dom';
import userContext from './Context/UserContext';
import { useState } from 'react';

function App() {
const [user,setUser] = useState(null)

  return (
    
    <userContext.Provider  value={[user,setUser]}>

    <BrowserRouter>
  
  <Routes>

      <Route path="/" element = {<LoginPage/>}/>
      <Route path="/profile" element = {<ProfilePage user={user}/>}/>
  </Routes>

   
 
    </BrowserRouter>
    </userContext.Provider>
     
    
  )
}

export default App
