export default function Navbar() {
  return (
    <div style={{
      height: "60px",
      background: "black",
      marginLeft: "200px",   // ✅ match sidebar
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      color: "white"
    }}>
      
      <h4 style={{ fontWeight: "bold", fontSize: "20px", margin: 0 }}>
        Smart Campus Dashboard
      </h4>

      {/* Logout button in header */}
      <button
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>

    </div>
  );
}