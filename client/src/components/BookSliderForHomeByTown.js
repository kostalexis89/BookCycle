import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookCard from './BookCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAccordionButton } from 'react-bootstrap';

export default function BookSliderForHomeByTown({ user, town}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const [BookList, setBookList] = useState([]);

  useEffect(() => {
    // console.log('I am searching')
    // console.log(user._id)
    const userId = user;
    axios
      .post("books/town", { user: user, town:town })
      .then((response) => {
        // console.log(response.data)
        setBookList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayBook = BookList.map((book) => {
    // console.log(book)
    return (
      <div key="book._id">
        <BookCard
          title={book.title}
          description={book.description}
          image={book.image}
          author={book.author}
          language={book.language}
          town={book.town}
          usersBookId={book.user}
          bookId={book._id}
        />
        {/* {book.title} */}
      </div>
    );
  });
  return (
    <div>
      <Carousel partialVisible={true} responsive={responsive} infinite={true}>
        {displayBook}
      </Carousel>
    </div>
  );
}
