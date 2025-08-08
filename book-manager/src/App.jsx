// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import booksData from './data';
import Stats from './components/Stats';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Nạp data.js vào localStorage nếu chưa có
    const existing = localStorage.getItem('books');
    if (!existing) {
      localStorage.setItem('books', JSON.stringify(booksData));
    }
    setReady(true);
  }, []);

  if (!ready) {
    return <div>Đang khởi tạo dữ liệu…</div>;
  }

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Quản lý Kho Sách</a>
          <div>
            <Link className="btn btn-outline-primary me-2" to="/">Danh sách</Link>
            <Link className="btn btn-primary" to="/add">Thêm sách mới</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<><Stats /><BookList /></>} />
        <Route path="/add" element={<BookForm />} />
        <Route path="/edit/:id" element={<BookForm />} />
      </Routes>
    </div>
  );
}
