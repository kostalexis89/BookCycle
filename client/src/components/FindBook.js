import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FindBook({handleSubmit, handleIsbn, isbn}) {
    return (
        // <div>

        //     <form onSubmit={handleSubmit} className="signup-form">
		// 		<label>Search with ISBN</label>
		// 		<input type="text" name="isbn" value={isbn} onChange={handleIsbn} />
        //         <button type="submit">Find Book</button>
		// 	</form>
        // </div>
        <Form className="searchIsbn" onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicIsbn">
                    <Form.Control type="text" placeholder="Isbn" value={isbn} onChange={handleIsbn}/>
                </Form.Group>

                <Button variant="danger" type="submit">
                    Search with Isbn
                </Button>
            </Form>
    )
}
