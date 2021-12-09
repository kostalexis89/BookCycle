import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'
// import { Form, Input, Button } from 'antd';
// import PlacesAutocomplete, {
// 	geocodeByAddress,
// 	getLatLng
// } from "react-places-autocomplete"

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)
	// //GOOGLE MAPS
	// const [address, setAddress] = useState('')
	// const handleSelect = async (value) => {

	// }
	// //End of google maps
	/**TOWN USE EFFECT */
	
	const navigate = useNavigate()

    const {loginUser} = useContext(AuthContext)

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
    
	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }

		axios.post('/auth/login', requestBody)
			.then(response => {
				// redirect -> Projects 
                // console.log(response.data.authToken)
                const token = response.data.authToken
                //call login user function from auth context
               
                loginUser(token)
				navigate('/')
			})
			.catch(err => {
				const errorDescrition = err.response.data.message
				setErrorMessage(errorDescrition)
			})
	}
	
	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit} className="signup-form">
			
             
				<label>Email: </label>
				<input type="text" name="email" value={email} onChange={handleEmail} />
				<label>Password: </label>
				<input type="password" value={password} onChange={handlePassword} />
				<button type="submit">Login</button>
			</form>
				
			{errorMessage && <p>{errorMessage}</p>}

			<p>Don't have an account?</p>
			<Link to='/signup'>Sign up</Link>
		</div>
	)
}

