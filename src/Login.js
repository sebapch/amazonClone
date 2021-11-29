import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {
        e.preventDefault();
        //Firebase LOGIN
        auth.signInWithEmailAndPassword(email, password).then(auth => {
          history.push('/')
        }).catch(error=> alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //Firebase REGISTER
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
          //success creating user and password
          console.log(auth);
          if(auth){
            history.push('/')
          }
        })
        .catch(error=> alert(error.message));
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className='login__signInButton' onClick={signIn} type='submit'> Sign In</button>
        </form>

        <p>By signing-in you agree Amazon conditions of use.</p>
        <button className='login_registerButton' onClick={register} type='submit'>Create Account</button>
      </div>
    </div>
  );
}

export default Login;
