import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'
import Book from '../components/Book'

export default function MyLibrary() {
    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState(null)
    const [author, setAuthor] = useState(null)
    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [language, setLanguage] = useState(null)
    const [bookPurpose, setBookPurpose] = useState(null)
    const {isLoggedIn, user} = useContext(AuthContext)
    
    const handleStoreToMyDB = () =>{
        console.log('I am adding it')
    }

    const handlePurpose = (e) => {
        // setBookPurpose(e)
        setBookPurpose(e.target.value)
    }

    const handleIsbn = e => setIsbn(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        // console.log(isbn)
        const getWorksApi = `https://openlibrary.org/isbn/${isbn}.json`
        // console.log(axiosString)
        axios.get(getWorksApi)
        .then(res => {
            //GETTING THE TITLE
            // console.log(res.data)
            // console.log("title: " + res.data.title)
            setTitle(res.data.title)
            // setTitle(res.data.title)
            const getDataApi = `https://openlibrary.org${res.data.works[0].key}.json`
            // console.log(getDataApi)
            axios.get(getDataApi)
            .then(res=> {
                console.log(res.data)
                //FOR AUTHOR
                const getAuthorApi = `https://openlibrary.org${res.data.authors[0].author.key}.json`
                axios.get(getAuthorApi)
                .then(res=> {
                    // console.log(res.data)
                     //GETTING THE AUTHOR
                    // console.log('Author: ' + res.data.name)
                    setAuthor(res.data.name)
                })
                .catch(err => console.log(err))
                //FOR IMAGE
                const getImageApi = `https://covers.openlibrary.org/b/id/${res.data.covers[0]}-L.jpg`
                // console.log(getImageApi)
                setImage(getImageApi)
                //There is this response.url. I might need that if i have bugs
                // axios.get(getImageApi)
                // .then(res=>{
                //     console.log(res)
                // })
                // .catch(err => console.log(err))
                //DESCRIPTION
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
            //language
            // console.log(res.data.languages[0].key)
            const languageApi = `https://openlibrary.org${res.data.languages[0].key}.json`
            axios.get(languageApi)
            .then(res => {
                // console.log(res.data.name)
                setLanguage(res.data.name)
            })
        })
        .catch(err => console.log(err))
    }
        

    
    return (
        <div>
            My library
            <form onSubmit={handleSubmit} className="signup-form">
				<label>ISBN: </label>
				<input type="text" name="isbn" value={isbn} onChange={handleIsbn} />
                <button type="submit">Find Book</button>
			</form>
           
            {title && author && language && <Book title={title} author={author} language={language} description={description} image={image} handleStoreToMyDB={handleStoreToMyDB}/> }
            
            {title && author && language &&  
            <div onChange={handlePurpose}>
                <input type="radio" value="GiveAway" name="gender" /> Give Away
                <input type="radio" value="Exchange" name="gender" /> Exchange
                <input type="radio" value="TradeForAPeriod" name="gender" /> Trade for a short period
            </div> }
            
            {title && author && language && <button onClick={handleStoreToMyDB}>Add it to my Library</button>}

        </div>
    )
}