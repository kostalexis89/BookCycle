import React from "react";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import MessageSection from "./MessageSection"

export default function RequestBookCard({ request,refresh, setRefresh }) {
    console.log(request)
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
      </div>} modal><MessageSection refresh={refresh} setRefresh={setRefresh} messageHistory={request.message} requestSender={request.sender} requestReciever={request.reciever} requestId={request._id}/></Popup>
      
    
  );
}
