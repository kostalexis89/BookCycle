import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        <>
        <div className="header">
        <div className="front-page-text-box">
          <h1 className="heading-primary">
             <span class="heading-primary-main">BookCycle</span>
              <span class="heading-primary-sub">Trade your Books</span>
          </h1>
        </div>
        </div>
        </>
        
      )}
    </>
  );
}
