import React, { useState, useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'
import Book from '../components/Book'
import FindBook from '../components/FindBook'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GiveAwaySlider from '../components/GiveAwaySlider'

export default function MyLibrary() {
    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState(null)
    const [author, setAuthor] = useState(null)
    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [language, setLanguage] = useState(null)
    const [bookPurpose, setBookPurpose] = useState(null)
    const {isLoggedIn, user} = useContext(AuthContext)
    

//    console.log(user)
    const handleStoreToMyDB = (e) =>{
        // console.log('I am adding it')
        e.preventDefault()
        const requestBody = {title: title, description: description, author: author, image: image, language: language, town: user.town, purpose: bookPurpose, available: true, user: user._id}
        axios.post('/books/add', requestBody)
        .then(response=> {
            // console.log(response)
            setIsbn('')
            setAuthor(null)
            setDescription(null)
            setImage(null)
            setLanguage(null)
            setBookPurpose(null)
            setTitle(null)

            //***********Here I HAVE TO REFRESH THE BOOK LIST************ */
        })
        .catch(err => console.log(err))
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
        
            <Container>
            <Row>
            <Col sm={4}>
                <FindBook handleSubmit={handleSubmit} isbn={isbn} handleIsbn={handleIsbn}/>
            
                {title && author && language && <Book title={title} author={author} language={language} description={description} image={image} handleStoreToMyDB={handleStoreToMyDB} handlePurpose={handlePurpose}/>}
            </Col>
            <Col className='my-library-right-column' sm={8}>
                <Row>
                    <h2>My Books to Give Away</h2>
                    <GiveAwaySlider user={user} purpose="GiveAway"/>
                </Row>
                <Row>
                    <h2>My Books for Exchange</h2>
                    <GiveAwaySlider user={user} purpose="Exchange"/>
                </Row>
                <Row>
                    <h2>My Books for short trade period</h2>
                    <GiveAwaySlider user={user} purpose="TradeForAPeriod"/>
                </Row>
            </Col>
            </Row>
            </Container>
       
    )
}