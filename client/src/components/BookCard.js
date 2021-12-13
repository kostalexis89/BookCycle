import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BookId from './BookId';

export default function Book({title, description, image, author, language, town, bookId}) {
    const [shortDescr] = useState(description.slice(0,70)+"...")
    
    return (
        <Popup trigger={<div className="book-card" >
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">By {author}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Written in {language}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Location {town}</Card.Subtitle>
            <Card.Text>{shortDescr}</Card.Text>
        </Card.Body>
        
        </Card>
    </div>} modal>
    <BookId title={title} description={description} image={image} author={author} language={language} town={town} bookId={bookId}/>
        </Popup>
    )
}
