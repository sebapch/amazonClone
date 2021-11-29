import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    //Only runs once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is  ', authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path="/checkout">
            
            <Checkout />    
          </Route>
          <Route path="/login">
            
           <Login />   
          </Route>

          <Route path="/">
            
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
