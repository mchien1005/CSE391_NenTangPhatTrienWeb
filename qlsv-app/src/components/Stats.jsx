import React, { useEffect, useState } from 'react';

export default function StudentStats() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(stored);
  }, []);

  const total = students.length;
  const classesCount = new Set(students.map(s => s.class)).size;
  const newestBirthYear = students.reduce((max, s) => {
    const y = Number(s.birthYear) || 0;
    return y > max ? y : max;
  }, 0);
  const currentYear = new Date().getFullYear();
  const averageAge = total
    ? Math.round(
        students.reduce((sum, s) => {
          const y = Number(s.birthYear);
          return sum + (y ? currentYear - y : 0);
        }, 0) / total
      )
    : 0;

  return (
    <div className="row mb-4 text-center">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5>{total}</h5>
            <p>Tổng số sinh viên</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5>{classesCount}</h5>
            <p>Số lớp</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5>{newestBirthYear || '—'}</h5>
            <p>Năm sinh mới nhất</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5>{averageAge || '—'}</h5>
            <p>Tuổi trung bình</p>
          </div>
        </div>
      </div>
    </div>
  );
}
