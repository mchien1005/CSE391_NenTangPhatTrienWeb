import { useState } from "react";

function StudentForm({ onAdd }) {
  const [formData, setFormData] = useState({ ten: "", email: "" });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.ten && formData.email) {
      onAdd(formData);
      setFormData({ ten: "", email: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        name="ten"
        value={formData.ten}
        onChange={handleChange}
        placeholder="Tên"
              required
              style={{backgroundColor: "#f0f0f0", border: "1px solid #ccc", padding: 8, borderRadius: 4, marginBottom: 10}}
      /> <br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
              style={{ backgroundColor: "#f0f0f0", border: "1px solid #ccc", padding: 8, borderRadius: 4, marginBottom: 10 }}
      /><br />
      <button type="submit">Thêm sinh viên</button>
    </form>
  );
}

export default StudentForm;
