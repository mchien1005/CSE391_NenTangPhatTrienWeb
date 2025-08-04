function StudentTable({ danhSach }) {
  return (
    <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Tên</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {danhSach.map((sv, index) => (
          <tr key={index}>
            <td>{sv.ten}</td>
            <td>{sv.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
