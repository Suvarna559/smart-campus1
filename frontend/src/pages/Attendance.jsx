import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Attendance() {   // ✅ THIS LINE IS IMPORTANT
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:5000/api/attendance", {
      headers: { Authorization: token }
    });

    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <h2>Attendance</h2>

      <ul>
        {data.map((d, i) => (
          <li key={i}>
            {new Date(d.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </Layout>
  );
}