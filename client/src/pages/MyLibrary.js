import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'


export default function MyLibrary() {
    const [isbn, setIsbn] = useState('')
    const handleIsbn = e => setIsbn(e.target.value)
    const handleSubmit = e => {}
        
    
    return (
        <div>
            My library
            <form onSubmit={handleSubmit} className="signup-form">
				<label>ISBN: </label>
				<input type="text" name="isbn" value={isbn} onChange={handleIsbn} />
			</form>
        </div>
    )
}
