import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import MessageSection from "./MessageSection"
import axios from 'axios'

export default function RequestBookCard({ request,refresh, setRefresh,proposal }) {
    
    const [sendersBookList, setSendersBookList] = useState([])

    useEffect(() => {
      const requestId = request.sender._id
      // console.log(requestId.request)
    
      axios.post('/books/getbooklist', {requestId: requestId})
      .then(response => {
        console.log(response)
        setSendersBookList(response.data)
        
      })

      // axios.post('/messages/proposals', {})
    }, [])

  return (
  
    <Popup trigger={<div key={request.book._id} >
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src={request.book.image} />
        <Card.Body>
          <Card.Title>{request.book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">By {request.book.author}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
           Requested by user {request.sender.username}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Owner {request.reciever.username}
          </Card.Subtitle>
          {/* <Card.Text>{shortDescr}</Card.Text> */}
        </Card.Body>
      </Card>
      </div>} modal><MessageSection proposal={proposal} sendersBookList={sendersBookList} refresh={refresh} setRefresh={setRefresh} messageHistory={request.message} requestSender={request.sender} requestReciever={request.reciever} requestId={request._id}/></Popup>
      
    
  );
}
