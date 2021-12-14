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
import BookSliderForHomeByTown from "../components/BookSliderForHomeByTown";

export default function Home() {
 
  const { user } = useContext(AuthContext);
  // console.log(user)


 
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
                <BookSliderForHomeByTown user={user._id} town={user.town}/>
                {" "}
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
