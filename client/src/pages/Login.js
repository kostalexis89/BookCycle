import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
		<div className="App-header App">
			<h1 className='headingOne'>Log In</h1>
				<Form onSubmit={handleSubmit}>			
					<Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
            	</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
                </Form.Group>
				<Button variant="danger" type="submit">
                    Log In
                </Button>
				{errorMessage && <p>{errorMessage}</p>}
				<Form.Group>
				<Form.Text className="text-muted">Don't have an account?</Form.Text><br></br>
				<Button variant="danger">
				<Link id='signup-btn' to='/signup'>Sign up</Link></Button></Form.Group>
				</Form>
				
			

			
		</div>
	)
}

