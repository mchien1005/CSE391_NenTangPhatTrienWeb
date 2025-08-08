import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function StudentForm({ editMode }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({ name: '', studentId: '', birthYear: '', class: '', email: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editMode && id) {
      const students = JSON.parse(localStorage.getItem('students')) || [];
      const found = students.find(s => s.id === Number(id));
      if (found) setStudent({ ...found });
    }
  }, [editMode, id]);

  const validate = () => {
    const e = {};
    if (!student.name || student.name.length > 100) e.name = 'Họ tên không hợp lệ';
    if (!student.studentId) e.studentId = 'Mã SV không được trống';
    if (!student.birthYear || student.birthYear < 1980 || student.birthYear > new Date().getFullYear()) e.birthYear = 'Năm sinh không hợp lệ';
    if (!student.class) e.class = 'Lớp không được trống';
    if (!student.email || !student.email.includes('@')) e.email = 'Email không hợp lệ';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const updatedStudent = {
      id: editMode ? Number(id) : Date.now(),
      name: student.name,
      studentId: student.studentId,
      birthYear: parseInt(student.birthYear),
      class: student.class,
      email: student.email
    };
    if (editMode) {
      const index = students.findIndex(s => s.id === Number(id));
      students[index] = updatedStudent;
    } else {
      students.push(updatedStudent);
    }
    localStorage.setItem('students', JSON.stringify(students));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      {['name', 'studentId', 'birthYear', 'class', 'email'].map((field, idx) => (
        <div key={idx} className="col-12">
          <label className="form-label">{field === 'studentId' ? 'Mã SV' : field === 'birthYear' ? 'Năm sinh' : field === 'class' ? 'Lớp' : field === 'name' ? 'Họ tên' : 'Email'}</label>
          <input
            type={field === 'birthYear' ? 'number' : field === 'email' ? 'email' : 'text'}
            className="form-control"
            value={student[field]}
            onChange={e => setStudent({ ...student, [field]: e.target.value })}
          />
          {errors[field] && <div className="text-danger small">{errors[field]}</div>}
        </div>
      ))}
      <div className="col-12">
        <button type="submit" className="btn btn-success">{editMode ? 'Cập nhật sinh viên' : 'Thêm sinh viên'}</button>
      </div>
    </form>
  );
}
