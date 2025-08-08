import React, { useEffect, useState } from 'react';

export default function Stats() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(stored);
  }, []);

  const total = books.length;
  const totalPages = books.reduce((sum, b) => sum + Number(b.pages || 0), 0);
  const categories = [...new Set(books.map(b => b.category))].length;
  const latestYear = books.reduce((max, b) => b.year > max ? b.year : max, 0);

  return (
    <div className="row mb-4 text-center">
      <div className="col">
        <div className="card"><div className="card-body"><h5>{total}</h5><p>Tổng số sách</p></div></div>
      </div>
      <div className="col">
        <div className="card"><div className="card-body"><h5>{categories}</h5><p>Thể loại</p></div></div>
      </div>
      <div className="col">
        <div className="card"><div className="card-body"><h5>{latestYear}</h5><p>Năm xuất bản mới nhất</p></div></div>
      </div>
      <div className="col">
        <div className="card"><div className="card-body"><h5>{totalPages}</h5><p>Tổng số trang</p></div></div>
      </div>
    </div>
  );
}
