import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {AuthContext} from '../context/auth'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card";

export default function MessageSection({messageHistory,requestId, proposal, requestSender,refresh, setRefresh, requestReciever,sendersBookList}) {
    const [message, setMessage] = useState('')
    const [proposalBack, setProposalBack] = useState(null)
    const {user} = useContext(AuthContext)
    const [bookForExchange, setBookForExchange] = useState('')
    const [checked, setChecked] = useState(false)
    const handleMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
        
    }
    
    const handlePurposeRequest = (id, user) => {
        console.log(user)
        console.log(requestId)
        axios.post('/messages/agree', {userId:id, requestId:requestId, userType: user})
        .then(response => {
            console.log(response)
        })

    }

    const handleRequest = (book) => {
        // console.log(book)
        setBookForExchange(book._id)
        axios.post('/messages/requestexchange', {bookId:book._id, requestId: requestId})
        .then(response => {
            console.log(response)
        })
        setChecked(!checked)
        setProposalBack(book.title)
    }
    const viewSendersBookList = sendersBookList.map(book=>{
        return (
          
                <Card className='message-card-for-grid' style={{ width: "14rem" }}>
        {/* <Card.Img className='lala' variant="top" src={book.image} /> */}
        <Card.Body>
          <Card.Title onClick={() => handleRequest(book)}>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
          {/* <Card.Text>{shortDescr}</Card.Text> */}
          {proposalBack===book.title && <Button variant="danger" onClick={()=>handlePurposeRequest(requestReciever._id, "Receiver")}>Purpose Completed</Button>
}
        </Card.Body>
      </Card>
           
        )
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
        // console.log('thats me',requestSender)
        console.log(requestReciever)
        axios.post('/messages/send', {message: user.username +": " + message, requestId:requestId })
        .then(response => {
            console.log(response)
        })
        setMessage('')
        setRefresh(refresh+1)
    }

    const handleCancelRequest = () => {
        console.log(requestId)
        axios.post('/messages/cancel', {requestId:requestId})
        .then(response => {
            console.log(response)
            setRefresh(refresh+1)
        })
    }

    const wholeMessage = messageHistory.slice(-8).map(message => {
        return (
            <div>
            <p key={requestId}>{message}</p>
            </div>
        )
    })

    

    return (
        <Container>
        <Row className='card-wrap'>
        <Col className='my-library-left-column' sm={5}>
            <div className='message-section' key={requestId}>
                {wholeMessage}
                <Form className='send-form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control value={message}  onChange={handleMessage} as="textarea" rows={3} placeholder="Write a message " />
                    </Form.Group>
                    <div className='message-btns'>
                        <Button variant="danger" type="submit">Send Message</Button>
                        <Button variant="danger" onClick={handleCancelRequest}>Cancel Request</Button>
                    </div>
                </Form>
            </div>
        </Col>
        <Col>
        
        {user._id!==requestSender._id && <><h2 className='message-title'>Click a Title to Propose ur exchange wish</h2><div className='message-grid'>
            
            {viewSendersBookList}
        </div></>}
        
        {user._id===requestSender._id && <div className='message-grid'>
            {<div className='proposal'>
                                    <h2 className='title-proposal'>{requestReciever.username} is asking for</h2>
                                {proposal &&
                                <Card className='message-card-for-grid' style={{ width: "14rem" }}>
                                {/* <Card.Img className='lala' variant="top" src={book.image} /> */}
                                <Card.Body>
                                <Card.Img variant="top" src={proposal.image} />
                                <Card.Title>{proposal.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">By {proposal.author}</Card.Subtitle>
                                {/* <Card.Text>{shortDescr}</Card.Text> */}
                                </Card.Body>
                                <Button variant="danger" onClick={()=>handlePurposeRequest(requestSender._id,"sender")}>Purpose Completed</Button>
                                </Card>}
                                </div>}
        </div>}
        
        </Col>
        </Row>
        </Container>
    )
}