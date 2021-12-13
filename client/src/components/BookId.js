import React from "react";
import Button from 'react-bootstrap/Button'

export default function BookId({
  title,
  description,
  image,
  author,
  language,
  town,
  bookId,
}) {
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
        <Button variant="danger">Button 1</Button>
        <Button variant="danger">Button 1</Button>
        </div>
      </div>
    </div>
  );
}
