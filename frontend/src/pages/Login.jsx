import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ email:"", password:"" });

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", data);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="center-page">
      <div className="form-box">

        <h3>Login</h3>

        <input placeholder="Email"
          onChange={e => setData({...data, email:e.target.value})} />

        <input type="password" placeholder="Password"
          onChange={e => setData({...data, password:e.target.value})} />

        <button className="btn btn-primary" onClick={login}>
          Login
        </button>

      </div>
    </div>
  );
}