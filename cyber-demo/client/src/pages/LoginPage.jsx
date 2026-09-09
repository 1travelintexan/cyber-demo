import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  async function handleLoginUser(e) {
    e.preventDefault();
    const userToLogin = { email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/login",
        userToLogin,
      );
      console.log(data);
      localStorage.setItem("authToken", data.authToken);
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="signup-page">
      <h2>Login</h2>
      <p>Lets get started with Career Guide</p>
      <section id="signup-btn-container">
        <button>
          <p>Login with linkedIn</p>
          <FaLinkedin size={20} color="#0A66C2" />
        </button>
        <button>
          <p>Login with Google </p>
          <FcGoogle size={20} />
        </button>
      </section>
      <div id="or-container">
        <p>or</p>
      </div>
      <form onSubmit={handleLoginUser}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="martin@ironhack.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="************"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
      <p>
        New Here? <Link to={"/"}>Sign Up</Link>
      </p>
    </div>
  );
};
