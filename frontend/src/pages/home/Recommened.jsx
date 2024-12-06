import React from 'react'
import BookCard from '../books/BookCard'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'

const Recommended = () => {
  const { data: books = [] } = useFetchAllBooksQuery()

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Recommended for You</h2>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 &&
          books.slice(8, 18).map((book, index) => (
            <div key={index} className='p-4 border rounded-lg bg-white shadow-md hover:shadow-lg'>
            <BookCard book={book} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Recommended
