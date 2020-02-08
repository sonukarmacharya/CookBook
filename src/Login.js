import React, { Component } from 'react'
import fire from './config/fire'

class Login extends Component{

    login(){

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        fire.auth().signInWithEmailAndPassword(email,password)
        .then((u) => {
            console.log("Successful login")
        })
        .catch((err) => {
            console.log("error"+err.toString())
        })
    }
    Signup(){

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then((u) => {
            console.log("Successful signup")
        })
        .catch((err) => {
            console.log("error"+err.toString())
        })
    }

    render(){
        return(

            <div>
                <div>
                    <div>Email</div>
                    <input id="email" type="text"/>           
                 </div>
                 <div>
                    <div>Password</div>
                    <input id="password" type="password"/>           
                 </div>
                 <button onClick={this.login}>Login</button>
                 <button onClick={this.Signup}>Signup</button>
            </div>
        )
    }
}

export default Login;