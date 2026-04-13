import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="card p-5 text-center shadow">

        <h1>🎓 Smart Campus</h1>
        <p>Manage everything in one place</p>

        <Link to="/login" className="btn btn-primary m-2">Login</Link>
        <Link to="/signup" className="btn btn-success m-2">Signup</Link>

      </div>
    </div>
  );
}