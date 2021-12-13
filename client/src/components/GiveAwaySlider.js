import React, { useState, useEffect ,useContext } from 'react'
import axios from 'axios'
import BookCard from './BookCard'

export default function BookListSlider({user, purpose}) {
    const [BookList, setBookList] = useState([])

    useEffect(()=> {
        // console.log('I am searching')
        // console.log(user._id)
        const userId = user._id
        axios.post('books/mycollection', {userId: userId, purpose: purpose})
        .then(response=> {
            // console.log(response.data)
            setBookList(response.data)
        })
        .catch(err => console.log(err))
       
    },[])

    const displayBook = BookList.map(book => {
        return (
            <>
                <BookCard title={book.title} description={book.description} image={book.image} author = {book.author} language={book.language} town = {book.town}/>
                {/* {book.title} */}
            </>
        )
    })

    console.log('My list for ' + purpose + ' ' + BookList)
    return (
        <div>
            {displayBook}
        </div>
    )
}