import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'


export default function MyLibrary() {
    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [authors, setAuthors] = useState([])

    const handleIsbn = e => setIsbn(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        // console.log(isbn)
        const axiosString = `https://openlibrary.org/isbn/${isbn}.json`
        // console.log(axiosString)
        axios.get(axiosString)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
        })
    }
        
    
    return (
        <div>
            My library
            <form onSubmit={handleSubmit} className="signup-form">
				<label>ISBN: </label>
				<input type="text" name="isbn" value={isbn} onChange={handleIsbn} />
                <button type="submit">Find Book</button>
			</form>
        </div>
    )
}
