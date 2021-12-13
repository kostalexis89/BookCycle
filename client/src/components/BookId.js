import React ,{useContext} from "react";
import Button from 'react-bootstrap/Button'
import {AuthContext} from '../context/auth'

export default function BookId({
  title,
  description,
  image,
  author,
  language,
  town,
  bookId,
}) {
    const {isLoggedIn, user} = useContext(AuthContext)
    console.log(user._id)
    console.log(bookId)
  return (
    <div className="modal-wrapper">
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
        {user._id===bookId && <><Button variant="danger">Edit Purpose or availability</Button>
        <Button variant="danger">Delete from your Collection</Button></>}
        
        </div>
      </div>
    </div>
  );
}
