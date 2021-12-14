import React, { useState, useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../context/auth'
import Book from '../components/Book'
import FindBook from '../components/FindBook'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BookSlider from '../components/BookSlider'

export default function MyLibrary() {
    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState(null)
    const [author, setAuthor] = useState(null)
    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)
    const [language, setLanguage] = useState(null)
    const [bookPurpose, setBookPurpose] = useState(null)
    const {isLoggedIn, user} = useContext(AuthContext)
    const [refresh, setRefresh] = useState(false)

//    console.log(user)
    const handleStoreToMyDB = (e) =>{
        // console.log('I am adding it')
        e.preventDefault()
        // if(description)
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
        setRefresh(!refresh)
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
                // console.log(res.data)
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
            <Col className='my-library-left-column' sm={4}>
                <FindBook handleSubmit={handleSubmit} isbn={isbn} handleIsbn={handleIsbn}/>
            
                {title && author && language && <Book title={title} author={author} language={language} description={description} image={image} handleStoreToMyDB={handleStoreToMyDB} handlePurpose={handlePurpose}/>}
            </Col>
            <Col className='my-library-right-column' sm={8}>
                <Row>
                    <h2 className='headers-h2'><span className='headers-container'>My Books to Give Away</span></h2>
                    <BookSlider user={user}  refresh={refresh} setRefresh={setRefresh} purpose="GiveAway"/>
                </Row>
                <Row>
                    <h2 className='headers-h2'><span className='headers-container'>My Books for Exchange</span></h2>
                    <BookSlider refresh={refresh} setRefresh={setRefresh} user={user} purpose="Exchange"/>
                </Row>
                <Row>
                    <h2 className='headers-h2'><span className='headers-container'>My Books for short trade period</span></h2>
                    <BookSlider  refresh={refresh} setRefresh={setRefresh}user={user} purpose="TradeForAPeriod"/>
                </Row>
            </Col>
            </Row>
            </Container>
       
    )
}