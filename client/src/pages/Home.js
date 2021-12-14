import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import BookCard from "../components/BookCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookSliderForHome from "../components/BookSliderForHome";

export default function Home() {
  const [BookListByTown, setBookListByTown] = useState([]);
  const [town, setTown] = useState('Berlin, Germany')
  const { user } = useContext(AuthContext);
  // console.log(user)

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

  useEffect(() => {
    // setTown(user.town)
    axios.post("books/town", { town: town, user: user._id })
      .then((response) => {
        setBookListByTown(response.data)
      })
      .catch((err) => console.log(err));

     
  }, []);

  const displayListByTown = BookListByTown.map((book) => {
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
    <>
      {user ? (
        <>
          <Container>
            <Row>
              <h2 className="headers-h2-home">
                <span className="headers-container">
                  Books accross {user.town}
                </span>
              </h2>

              <Col>
                <Carousel
                  partialVisible={true}
                  responsive={responsive}
                  infinite={true}
                >
                  {displayListByTown}
                </Carousel>{" "}
              </Col>
            </Row>
            <Row>
              <h2 className="headers-h2-home">
                <span className="headers-container">
                  Give Away Books in {user.town}
                </span>
              </h2>

              <Col>
                <BookSliderForHome purpose="GiveAway" user={user._id} town={user.town}/>{" "}
              </Col>
            </Row>
            <Row>
              <h2 className="headers-h2-home">
                <span className="headers-container">
                  Exchange Books among {user.town}
                </span>
              </h2>

              <Col>
                <BookSliderForHome purpose="Exchange" user={user._id} town={user.town}/>{" "}
              </Col>
            </Row>
            <Row>
              <h2 className="headers-h2-home">
                <span className="headers-container">
                  Trade Books for Short Period in {user.town}
                </span>
              </h2>

              <Col>
                <BookSliderForHome purpose="TradeForAPeriod" user={user._id} town={user.town}/>{" "}
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <div className="front-page">
          <h1>Welcome to BookCycle</h1>
          <p>
            An application that helps people trade exchange or Give Away their
            books
          </p>
        </div>
      )}
    </>
  );
}
