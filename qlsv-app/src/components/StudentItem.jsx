import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentItem({ student, onDelete }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>#{student.id}</td>
      <td>{student.name}</td>
      <td>{student.studentId}</td>
      <td>{student.birthYear}</td>
      <td>{student.class}</td>
      <td>{student.email}</td>
      <td>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => navigate(`/edit/${student.id}`)}
        >
          Sửa
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(student.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
