const router = require('express').Router()
const Book = require('../models/Book.model')

//create a book 
router.post('/add', (req, res, next) => {
    const {title, description, author, image, language,town, purpose, available} = req.body
    Book.create({title, description, author, image, language,town, purpose, available})
    .then(book => {
        res.status(201).json(book)
    })
    .catch(err => next(err))
})

module.exports = router