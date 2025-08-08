// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(stored);
  }, []);

  const handleDelete = id => {
    if (window.confirm('Xác nhận xóa sách này?')) {
      const updated = books.filter(b => b.id !== id);
      localStorage.setItem('books', JSON.stringify(updated));
      setBooks(updated);
    }
  };

  return (
    <table className="table table-striped table-hover">
      <thead className="table-primary">
        <tr>
          <th>ID</th><th>Tiêu đề</th><th>Tác giả</th><th>Năm</th>
          <th>Thể loại</th><th>Trang</th><th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <BookItem key={book.id} book={book} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
}
