import React, { useState, useEffect } from "react";
import BookList from './BookList';
import BookForm from './BookForm';
function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ]);
  

  return (
    <div className="App">
      <h1>Book Manager</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
