import React, { Component } from 'react'
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Link,Route} from 'react-router-dom'
import fire from './config/fire';

class App extends Component{
		render(){
			return(
				<div>				
				<BrowserRouter>
                <h2>
                  <Link to={"/login"}> Login</Link>
                </h2>
                  <Route exact path="/login" component={Login}/>
                </BrowserRouter>
				</div>

			
			);
		}
	}

export default App;