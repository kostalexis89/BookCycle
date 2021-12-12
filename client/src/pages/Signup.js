import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import capitalsCities from '../capitals.json'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    //states declarations
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [town, setTown] = useState('')
    const [findedTowns, setFindedTowns] = useState([])
    const [picture, setPicture] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()
    //Forms Handlerers
    const handleName = e => setUsername(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handlePicture = e => setPicture(e.target.value)
    //Town Handler
    const handleTown = e => {
		setTown(e.target.value)
	}
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
    const handleDropTown = e => setTown(e.target.innerHTML)

    const handleSubmit = (e) => {
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
    return (
        <div className="App-header">
        <h1 className='headingOne'>Sign Up to BookCycle</h1>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={handleName}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
                    <Form.Text className="text-muted">
                    We'll never share your e-mail to third party
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTown">
                    <Form.Label>Town</Form.Label>
                    <Form.Control type="text" placeholder="Password" value={town} onChange={handleTown}/>
                    <div className="drop-towns">{findedTowns.map((town, index) => {
					return <div key={index} className='child-towns' onClick={handleDropTown}>{town}</div>
				})}</div>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" value={picture} onChange={handlePicture}/>
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
            {errorMessage && <p>{errorMessage}</p>}

			<p>Already have an account?</p>
            <Button variant="danger">Login</Button>
			{/* <Link to='/login'>Login</Link> */}
        </div>
    )
}
