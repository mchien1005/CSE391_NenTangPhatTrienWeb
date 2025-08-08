import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookForm({ editMode }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({ title: '', author: '', year: '', category: '', pages: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editMode && id) {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      const found = books.find(b => b.id === id);
      if (found) setBook({ ...found, password: '', confirm: '' });
    }
  }, [editMode, id]);

  const validate = () => {
    const e = {};
    if (!book.title || book.title.length > 100) e.title = 'Tiêu đề không hợp lệ';
    if (!book.author) e.author = 'Tác giả không được trống';
    if (!book.year || book.year < 1900 || book.year > new Date().getFullYear()) e.year = 'Năm không hợp lệ';
    if (!book.pages || book.pages <= 0) e.pages = 'Số trang phải > 0';
    if (!book.password || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(book.password))
      e.password = 'Mật khẩu chưa đúng yêu cầu';
    if (!book.confirm || book.confirm !== book.password) e.confirm = 'Mật khẩu xác nhận không khớp';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBook = {
      id: editMode ? id : Date.now().toString(),
      title: book.title,
      author: book.author,
      year: parseInt(book.year),
      category: book.category,
      pages: parseInt(book.pages)
    };
    if (editMode) {
      const index = books.findIndex(b => b.id === id);
      books[index] = updatedBook;
    } else {
      books.push(updatedBook);
    }
    localStorage.setItem('books', JSON.stringify(books));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      {['title', 'author', 'year', 'category', 'pages'].map((field, idx) => (
        <div key={idx} className="col-12">
          <label className="form-label">{field === 'pages' ? 'Số trang' : field === 'year' ? 'Năm xuất bản' : field === 'category' ? 'Thể loại' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
          {field === 'category' ? (
            <select className="form-select" value={book[field]} onChange={e => setBook({ ...book, [field]: e.target.value })}>
              <option value="">-- Chọn thể loại --</option>
              <option value="Văn học">Văn học</option>
              <option value="Lịch sử">Lịch sử</option>
              <option value="Công nghệ">Công nghệ</option>
              <option value="Thiếu nhi">Thiếu nhi</option>
              <option value="Tâm lý học">Tâm lý học</option>
            </select>
          ) : (
            <input
              type={['year', 'pages'].includes(field) ? 'number' : 'text'}
              className="form-control"
              value={book[field]}
              onChange={e => setBook({ ...book, [field]: e.target.value })}
            />
          )}
          {errors[field] && <div className="text-danger small">{errors[field]}</div>}
        </div>
      ))}
      <div className="col-12">
        <label className="form-label">Mật khẩu quản trị</label>
        <input type="password" className="form-control" value={book.password} onChange={e => setBook({ ...book, password: e.target.value })} />
        {errors.password && <div className="text-danger small">{errors.password}</div>}
      </div>
      <div className="col-12">
        <label className="form-label">Xác nhận mật khẩu</label>
        <input type="password" className="form-control" value={book.confirm} onChange={e => setBook({ ...book, confirm: e.target.value })} />
        {errors.confirm && <div className="text-danger small">{errors.confirm}</div>}
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success">{editMode ? 'Cập nhật sách' : 'Thêm sách'}</button>
      </div>
    </form>
  );
}
