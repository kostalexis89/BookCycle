import axios from "axios";
import React ,{useContext, useState} from "react";
import Button from 'react-bootstrap/Button'
import {AuthContext} from '../context/auth'
import { useNavigate } from 'react-router-dom'

export default function BookIdPopup({
  title,
  description,
  image,
  author,
  language,
  town,
  usersBookId,
  bookId,
  setRefresh,
  refresh
}) {
     let navigate = useNavigate();
    const {isLoggedIn, user} = useContext(AuthContext)
    const [viewPopup, setViewPopup] = useState(true)
    // console.log(user._id)
    // console.log(bookId)

    const handleDeleteFromCollection =() =>{
      console.log(bookId)
      axios.delete(`books/delete/${bookId}`)
      .then(() => {
        setRefresh(!refresh)
        setViewPopup(false)
        // navigate('/')
      })
      .catch(err => console.log(err))
      
    }

  return (
    <>
    {viewPopup ? <div className="modal-wrapper">
    <div className="image-wrapper">
      <img src={image} />
    </div>
    <div className="info-wrapper">
      <div className="title-wrapper">
        <h3>{title}</h3>
        <h3>by {author}</h3>
        <h3>language: {language}</h3>
      </div>
      <p>{description}</p>

      <div className="button-wrapper">
      {user._id===usersBookId && <><Button variant="danger">Edit Purpose or availability</Button>
      <Button variant="danger" onClick={handleDeleteFromCollection}>Delete from your Collection</Button></>}
      
      </div>
    </div>
  </div> : <h2>Book deleted from my Collection</h2>}</>
    
  );
}
