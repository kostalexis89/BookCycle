import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import capitalsCities from '../capitals.json'
// import { Form, Input, Button } from 'antd';
// import PlacesAutocomplete, {
// 	geocodeByAddress,
// 	getLatLng
// } from "react-places-autocomplete"

export default function Signup() {

	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
    const [picture, setPicture] = useState('')
    const [town, setTown] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)
	const [findedTowns, setFindedTowns] = useState([])
	// //GOOGLE MAPS
	// const [address, setAddress] = useState('')
	// const handleSelect = async (value) => {

	// }
	// //End of google maps
	/**TOWN USE EFFECT */
	useEffect(() => {
		// console.log('Searching for town');
		// console.log(capitalsCities.data)
		
		let results = []
		capitalsCities.data.map((e)=>{
		if(e.capital.toLowerCase().includes(town.toLowerCase())){
			results.unshift(e.capital +", "+e.name)
		}
		
		return true
		})
		if(town.length===0){
			results = []
		}
		results = results.slice(0, 5);
		// console.log("results")
		// console.log(results)
		// console.log(town.length)
		setFindedTowns(results)
		
	}, [town])
	const navigate = useNavigate()

	const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setUsername(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
    const handleTown = e => {
		setTown(e.target.value)
	}
    const handlePicture = e => setPicture(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, username, town }

		axios.post('/auth/signup', requestBody)
			.then(response => {
				// redirect -> login 
				navigate('/login')
			})
			.catch(err => {
				const errorDescrition = err.response.data.message
				setErrorMessage(errorDescrition)
			})
	}

	const handleDropTown = e => setTown(e.target.innerHTML)
	
	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit} className="signup-form">
				{/* <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>(
					<div>
						<input {...getInputProps({placeholder: "Type town"})}/>
						<div>
							{loading ? <div>...loading</div> : null}
							{suggestions.map((suggestion)=> {
								console.log(suggestion)
								return <div>{suggestion.description}</div>
							})}
						</div>
					</div>)}
				</PlacesAutocomplete> */}
                <label>Userame: </label>
				<input type="text" value={username} onChange={handleName} />
				<label>Email: </label>
				<input type="text" name="email" value={email} onChange={handleEmail} />
				<label>Password: </label>
				<input type="password" value={password} onChange={handlePassword} />
				<label>Town: </label>
				<input type="text" value={town} onChange={handleTown}/>
				<div className="drop-towns">{findedTowns.map((town, index) => {
					return <div key={index} className='child-towns' onClick={handleDropTown}>{town}</div>
				})}</div>
                <label>Picture: </label>
				<input type="text" value={picture} onChange={handlePicture} />

				<button type="submit">Sign Up</button>
			</form>
				
			{errorMessage && <p>{errorMessage}</p>}

			<p>Already have an account?</p>
			<Link to='/login'>Login</Link>
		</div>
	)
}

