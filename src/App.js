import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children
  }; 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={ 
            <ProtectRoute>
              <Home />
            </ProtectRoute>}/>
            
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
