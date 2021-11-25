import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
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
