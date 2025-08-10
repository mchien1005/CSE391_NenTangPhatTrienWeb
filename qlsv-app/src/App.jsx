import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import studentsData from './data';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import Stats from './components/Stats';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Nạp dữ liệu mẫu vào localStorage nếu chưa có
    const existing = localStorage.getItem('students');
    if (!existing) {
      localStorage.setItem('students', JSON.stringify(studentsData));
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
          <a className="navbar-brand" href="/">Quản lý Sinh viên</a>
          <div>
            <Link className="btn btn-outline-primary me-2" to="/">Danh sách</Link>
            <Link className="btn btn-primary" to="/add">Thêm sinh viên</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<><Stats /><StudentList /></>} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentForm editMode />} />
      </Routes>
    </div>
  );
}
