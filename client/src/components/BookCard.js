import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'


export default function Book({title, description, image, author, language, town}) {
    const [shortDescr] = useState(description.slice(0,70)+"...")
    
    return (
        
        <div className="book-card" >
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
        </div>
    )
}
