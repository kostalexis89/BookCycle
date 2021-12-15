import axios from "axios";
import React ,{useContext, useState} from "react";
import Button from 'react-bootstrap/Button'
import {AuthContext} from '../context/auth'
// import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

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
  refresh,
  owner
}) {
 
    const [showEditBtn, setShowEditBtn] = useState(true)
    const [purpose, setPurpose] = useState ('')
    // let navigate = useNavigate();
    const { user} = useContext(AuthContext)
    const [viewPopup, setViewPopup] = useState(true)
    // console.log(user._id)
    // console.log(bookId)
    const handleEditPurposeOrAvailability = () => {
      setShowEditBtn(!showEditBtn)
      
    }

    const handleDeleteFromCollection =() =>{
      console.log(user._id)
      const userId = user._id
      const bookOwner = usersBookId
      console.log(bookOwner)
      axios.post(`books/delete/${bookId}`, {userId, bookOwner})
      .then(() => {
        setRefresh(!refresh)
        setViewPopup(false)
        // navigate('/')
      })
      .catch(err => console.log(err))
      
    }

  const handlePurpose = (e) => {
      setPurpose(e.target.value)
      // console.log(e.target.value)
  }

  const handleUpdatePurpose = () => {
    console.log('I am handling')
    if(purpose!==''){
      const userId = user._id
      const bookOwner = usersBookId
      axios.post(`/books/edit/${bookId}`, {userId, bookOwner, purpose})
      .then(() => {
        setRefresh(!refresh)
        setViewPopup(false)
        // navigate('/')
      })
    }
    console.log(purpose)
    
  }

  return (
    <>
    {viewPopup ? <div className="modal-wrapper">
    <div className="image-wrapper">
      <img src={image} alt={title}/>
    </div>
    <div className="info-wrapper">
      <div className="title-wrapper">
        <h3>{title}</h3>
        <h3>by {author}</h3>
        <h3>language: {language}</h3>
      </div>
      <p>{description}</p>
      <h5>Owner {owner}</h5>
      <div className="button-wrapper">
      {user._id===usersBookId && <>{ showEditBtn ? <Button variant="danger" onClick={handleEditPurposeOrAvailability}>Edit Purpose or availability</Button> : 
      <div className="addProperties" onClick={handlePurpose}>
                    <span className='radio-select'><input type="radio" value="GiveAway" name="gender" id='giveaway' /> <label htmlFor='giveaway'>Give Away</label></span>
                    <span className='radio-select'><input type="radio" value="Exchange" name="gender" id='exchange' /> <label htmlFor='exchange'>Exchange</label></span>
                    <span className='radio-select'><input type="radio" value="TradeForAPeriod" name="gender" id='shortTrade' /><label htmlFor='shortTrade' >Short Trade</label></span>
                    <Button variant="danger" onClick={handleUpdatePurpose}>Update Purpose</Button>
      </div>}
      <Button variant="danger" onClick={handleDeleteFromCollection}>Delete from your Collection</Button></>}
      
      </div>
    </div>
  </div> : <Spinner animation="grow"></Spinner>}</>
    
  );
}
