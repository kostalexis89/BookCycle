import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Book({title, description, image, author, language, handleStoreToMyDB, handlePurpose}) {
    const [shortDescr] = useState(description.slice(0,70)+"...")
    
    return (
        // <div>
        //     <h1>{title}</h1>
        //     <h2>{author}</h2>
        //     {description && <p>{description}</p>}
            
        //     <p>{language}</p>
        //     {image && <img src={image} alt={title} />}
        // </div>
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By {author}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Written in {language}</Card.Subtitle>
                <Card.Text>{shortDescr}</Card.Text>
                <div className="addProperties" onChange={handlePurpose}>
                    <span className='radio-select'><input type="radio" value="GiveAway" name="gender" id='giveaway' /> <label htmlFor='giveaway'>Give Away</label></span>
                    <span className='radio-select'><input type="radio" value="Exchange" name="gender" id='exchange' /> <label htmlFor='exchange'>Exchange</label></span>
                    <span className='radio-select'><input type="radio" value="TradeForAPeriod" name="gender" id='shortTrade' /><label htmlFor='shortTrade' >Short Trade</label></span>
                {/* <button onClick={handleStoreToMyDB}>Add it to my Library</button> */}
                </div>
                <Button onClick={handleStoreToMyDB} variant="danger">Add it to my Library</Button>
            </Card.Body>
            
            </Card>
        </div>
    )
}
