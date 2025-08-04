import { useState } from "react";
import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

function App() {
  const [danhSach, setDanhSach] = useState([
    { ten: "Nguyễn Văn A", email: "a@gmail.com" }
  ]);
  const [isShowForm, setIsShowForm] = useState(false);

  function handleAdd(sv) {
    setDanhSach([...danhSach, sv]);
  }

  return (
    <div style={{  maxWidth: 500, margin: "40px auto",  padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <Header />

      <button onClick={() => setIsShowForm(!isShowForm)} style={{ marginBottom: 10 }}>
        {isShowForm ? "Đóng Form" : "Thêm sinh viên"}
      </button>

      {isShowForm && <StudentForm onAdd={handleAdd} />}

      <StudentTable danhSach={danhSach} />
    </div>
  );
}

export default App;
