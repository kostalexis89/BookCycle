const router = require('express').Router()
const Book = require('../models/Book.model')

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

router.delete('/delete/:id', (req,res,next) => {
    Book.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.status(200).json({ message: 'Book deleted from my Collection' })
    })

})

module.exports = router