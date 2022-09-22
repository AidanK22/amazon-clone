import React, { useEffect } from "react";
import './App.css';

import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./store/StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) =>{
      console.log('THE USER IS >>>', authUser)
      if (authUser){
        //the use just logged / the use was loggid in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
      //else user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
  
  return (
    // BEM
    
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage/>} exact/>

          <Route path="/checkout" element={<CheckoutPage/>} exact/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    
  );
}

export default App;
