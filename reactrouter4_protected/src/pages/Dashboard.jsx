// pages/Dashboard.jsx
function Dashboard({ handleLogout }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dashboard (Protected)</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;