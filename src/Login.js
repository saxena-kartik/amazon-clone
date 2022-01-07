import React, {useState} from 'react'
import "./Login.css"
import img from "./images/amazon_logo_white.jpg"
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "./firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {

    const navigate=useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn= e=>{
        e.preventDefault();
        //firebase auth stuff
        signInWithEmailAndPassword(auth,email,password).then(auth=>{navigate('/')}).catch(error=>alert(error.message))
    }

    const register= e=>{
        e.preventDefault();
        //firebase register stuff
        createUserWithEmailAndPassword(auth,email, password).then((auth)=>{console.log(auth);
        if(auth){
            navigate('/')
        }
        
        }//successful registration
        ).catch(error=>alert(error.message))

    }


    return (
        <div className='login'>
        <Link to="/">
            <img className="login__img" src={img} alt="amazon_logo"></img>
        </Link>
        <div className="login__container">
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button type="submit" onClick={signIn}className="login__signInButton">Sign In</button>

            <p> Terms & Conditions <small>By signing-in you agree to the AMAZON CLONE conditions of Use & Sale. Please see our Privacy Poicy, our Cookies Policy and our Internet-Based Ads Policy.</small></p>

            <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>

        </form>

        </div>

        </div>
    )
}

export default Login
