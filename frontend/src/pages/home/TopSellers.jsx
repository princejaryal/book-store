import React, { useState } from 'react';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
  const [searchTerm, setSearchTerm] = useState('');
  const { data: books = [], isLoading, error } = useFetchAllBooksQuery();

  // Filter books based on search term and selected category
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "Choose a genre" ||
      book.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearchTerm =
      book.title?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearchTerm;
  });

  if (isLoading) {
    return <p className="text-gray-500">Loading books...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading books: {error.message}</p>;
  }

  return (
    <div className="py-10">
    <h2 className="text-3xl font-semibold mb-2">Top Sellers</h2>
  
    {/* Search bar and category filtering */}
    <div className="mb-10 flex flex-wrap items-center gap-4">
      <input type="text" placeholder="Search books By their name" value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}  className="flex-grow border bg-[#EAEAEA] border-gray-300 rounded-md px-3 py-2 focus:outline-none"/>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} name="category" id="category" className="w-48 border bg-[#EAEAEA] border-gray-300 rounded-md px-3 py-2 focus:outline-none">
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  
    {/* Product grid */}
    {filteredBooks.length > 0 ? (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No books found matching your search.</p>
    )}
  </div>
  
  );
};

export default TopSellers;
