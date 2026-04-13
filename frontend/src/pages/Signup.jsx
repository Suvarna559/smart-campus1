import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [data, setData] = useState({ name:"", email:"", password:"" });

  const signup = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", data);
    alert("Signup done");
    window.location.href = "/login";
  };

  return (
    <div className="center-page">
      <div className="form-box">

        <h3>Create Account</h3>

        <input placeholder="Name"
          onChange={e => setData({...data, name:e.target.value})} />

        <input placeholder="Email"
          onChange={e => setData({...data, email:e.target.value})} />

        <input type="password" placeholder="Password"
          onChange={e => setData({...data, password:e.target.value})} />

        <button className="btn btn-success" onClick={signup}>
          Signup
        </button>

        <p>
          Already have account?
          <span style={{cursor:"pointer", color:"blue"}}
            onClick={()=>window.location.href="/login"}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}