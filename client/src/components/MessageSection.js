import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {AuthContext} from '../context/auth'

export default function MessageSection({messageHistory,requestId, requestSender,refresh, setRefresh, requestReciever}) {
    const [message, setMessage] = useState('')
    const {user} = useContext(AuthContext)
    const handleMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
        console.log(requestSender)
        console.log(requestReciever)
        axios.post('/messages/send', {message: user.username +": " + message, requestId:requestId })
        .then(response => {
            console.log(response)
        })
        setMessage('')
        setRefresh(refresh+1)
    }

    const wholeMessage = messageHistory.map(message => {
        return (
            <p key={requestId}>{message}</p>
        )
    })
    return (
        <div className='message-section' key={requestId}>
            {wholeMessage}
            <Form className='send-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Control value={message}  onChange={handleMessage} as="textarea" rows={3} placeholder="Write a message " />
                </Form.Group>
                <div className='message-btns'>
                    <Button variant="danger" type="submit">Send Message</Button>
                </div>
            </Form>
        </div>
    )
}
