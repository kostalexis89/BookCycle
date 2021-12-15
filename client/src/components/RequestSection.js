import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {AuthContext} from '../context/auth'
import axios from 'axios'

export default function RequestSection({owner,ownerId, bookId}) {
    const {user} = useContext(AuthContext)
    const [showMessage, setShowMessage] = useState(true)
    const [message, setMessage] = useState('')
    const handleShowMessageBox = () => {
        setShowMessage(!showMessage)
    }

    const handleMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(user.username + ": " + message)
        console.log('I am sending the request')
        console.log('user ID', user._id)
        console.log('owner ID',ownerId)
        axios.post('/books/sendRequest', {userId: user._id, ownerId:ownerId, message: message, bookId})
        .then(response => {
            console.log(response)
        })
        setMessage('')
    }


    return (
        <>{showMessage ? <Button variant="danger" onClick={handleShowMessageBox}>Send a message to {owner}</Button> 
        : <>
            <Form className='send-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Control value={message}  onChange={handleMessage} as="textarea" rows={3} placeholder="Write a message " />
                </Form.Group>
                <div className='message-btns'>
                    <Button variant="danger" type="submit">Submit Request</Button>
                    <Button variant="danger" onClick={handleShowMessageBox}>Cancel</Button>
                </div>
            </Form>
            
        </>}
            
        </>
    )
}