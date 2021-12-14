const router = require('express').Router()
const Book = require('../models/Book.model')
const userEditAccess = require("../middleware/userEditAccess");

//create a book 
router.post('/add', (req, res, next) => {
    const {title, description, author, image, language,town, purpose, available, user} = req.body
    Book.create({title, description, author, image, language,town, purpose, available, user})
    .then(book => {
        res.status(201).json(book)
    })
    .catch(err => next(err))
})

router.post('/mycollection', (req, res, next) => {
    console.log('I am searching')
    const {userId, purpose} = req.body
    console.log('This is ' + userId)
    Book.find({
        user: userId,
        purpose: purpose
    })
    .then(response => {
        res.status(200).json(response)
    })
})

router.post('/delete/:id',userEditAccess, (req,res,next) => {
    


    Book.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.status(200).json({ message: 'Book deleted from my Collection' })
    })

})

router.post('/edit/:id',userEditAccess, (req, res, next) => {
    const {purpose} = req.body
    console.log(req.body)
    console.log('I am trying to edit now')
    const id = req.params.id
    console.log(id)
    Book.findByIdAndUpdate(id, {
        purpose: purpose
    }, {new: true})
    .then(updatedBook => {
        res.status(200).json(updatedBook)
    })
    .catch(err => next(err))

})

router.post('/town', (req, res, next) => {
    const {town, user} = req.body
    console.log(user)
    Book.find({$and: [{town:town}, {user: {$ne:user}}]})
    .then(response => {
        res.status(200).json(response)
    })
})
module.exports = router