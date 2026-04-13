import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Navbar />

      {/* MAIN CONTENT */}
      <div style={{
        marginLeft: "200px",   // ✅ same as sidebar width
        marginTop: "60px",     // ✅ below navbar
        padding: "20px"
      }}>
        {children}
      </div>
    </>
  );
}