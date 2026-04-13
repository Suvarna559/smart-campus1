import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const [attendance, setAttendance] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    socket.on("receiveNotice", (msg) => {
      console.log(msg);
    });

    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/attendance", {
      headers: { Authorization: token }
    });
    setAttendance(res.data);
  };

  const markAttendance = async () => {
    const token = localStorage.getItem("token");

    await axios.post("http://localhost:5000/api/attendance",
      { date: new Date() },
      { headers: { Authorization: token } }
    );

    fetchAttendance();
  };

  const sendNotice = () => {
    socket.emit("sendNotice", notice);
  };

  return (
    <Layout>
      {/* <h2 className="mb-4">Dashboard</h2> */}
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

      <div className="row">

        {/* Attendance Card */}
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Attendance</h5>
            <button className="btn btn-success mb-2" onClick={markAttendance}>
              Mark Attendance
            </button>

            <p>Total Days: {attendance.length}</p>
          </div>
        </div>

        {/* Notice Card */}
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Send Notice</h5>

            <input className="form-control mb-2"
              onChange={(e) => setNotice(e.target.value)}
            />

            <button className="btn btn-primary" onClick={sendNotice}>
              Send
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="col-md-4">
          <div className="card shadow p-3 text-center">
            <h5>User</h5>
            <p>Role: Student</p>
          </div>
        </div>

      </div>
    </Layout>
  );
}