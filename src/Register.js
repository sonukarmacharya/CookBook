import React from 'react';
import firebase from 'firebase'
import { BrowserRouter, Route ,Link } from 'react-router-dom';
import Login from './Login';
class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			error: null
		}
	}
	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}
	handleSubmit = e => {
		e.preventDefault();
    const {email, username, password} = this.state;
    firebase
        .auth()
	.createUserWithEmailAndPassword(email, password)
	.then(() => {
	    const user = firebase.auth().currentUser;
	    user
	        .updateProfile({displayName: username})
		.then(() => {
		    this.props.history.push('/');
		})
		.catch(error => {
		    this.setState({error});
		});
        })
    .catch(error => {
        this.setState({error});
    });
	}
	render(){
		const {email, username, password, error} = this.state;
		return(
			<div className="auth--container">
				<h1>Register your account</h1>
				{error && <p className="error-message">{error.message}</p>}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" value={username} onChange={this.handleChange} />
					<label htmlFor="email">Email address</label>
					<input type="text" name="email" id="email" value={email} onChange={this.handleChange} />
					<label htmlFor="password">Choose a password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={this.handleChange}
					/>
					<button className="general-submit" children="Get Started" />
				</form>
			</div>
		);
	}
}
export default Register;