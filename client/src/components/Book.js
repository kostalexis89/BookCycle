import React from 'react'

export default function Book({title, description, image, author, language}) {
  
    return (
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            {description && <p>{description}</p>}
            
            <p>{language}</p>
            {image && <img src={image} alt={title} />}

        
           
            

        </div>
    )
}
