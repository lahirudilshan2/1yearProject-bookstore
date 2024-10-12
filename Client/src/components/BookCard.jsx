import React from 'react'
import { Link} from 'react-router-dom'

const BookCard = ({book, role}) => {
    const { name, author, imageUrl, pdfURL} = book
  return (
    <div className='book-card'>
        <img src={imageUrl} alt={name} className='book-image'/>
        <div className="book-details">
        </div>
        {role === "admin" &&
          <div className="book-actions">
          <button><Link to={`/book/${x._id}`} className='btn-link'>edit</Link></button>
          <button><Link to={`/delete/${book._id}`} className='btn-link'>delete</Link></button>
          <button><Link to={`/download/${book._id}`} className='btn-link'>Open</Link></button>
      </div>}

        {role === "student" &&
          <div>
          <button><Link to={`/download/${book._id}`} className='btn-link'>Open</Link></button>
          </div>}
        
    </div>
  )
}

export default BookCard