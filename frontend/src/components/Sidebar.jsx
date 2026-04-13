import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "170px",
      height: "100vh",
      background: "#1e293b",
      color: "white",
      padding: "20px",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>

      {/* Top */}
      <div>
        <h3 style={{ fontWeight: "bold", fontSize: "22px" }}>
          🎓 Campus
        </h3>

        <div style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>
          <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          <Link to="/student" style={linkStyle}>Student Info</Link>
          <Link to="/attendance" style={linkStyle}>Attendance</Link>
          <Link to="/campus" style={linkStyle}>Campus Info</Link>
        </div>
      </div>

      {/* Bottom Logout */}
      <div
        style={{ cursor: "pointer", fontWeight: "bold" }}
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};