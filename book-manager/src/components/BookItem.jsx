// src/components/BookItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookItem({ book, onDelete }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>#{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>{book.category}</td>
      <td>{book.pages} trang</td>
      <td>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => navigate(`/edit/${book.id}`)}
        >
          Sửa
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(book.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
