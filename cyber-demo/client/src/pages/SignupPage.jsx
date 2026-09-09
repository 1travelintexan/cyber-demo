import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  async function handleSignupUser(e) {
    e.preventDefault();
    const userToSignup = { username, email, password };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/signup",
        userToSignup,
      );
      console.log(data);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <p>Lets get started with Career Guide</p>
      <section id="signup-btn-container">
        <button>
          <p>Sign up with linkedIn</p>
          <FaLinkedin size={20} color="#0A66C2" />
        </button>
        <button>
          <p>Sign up with Google </p>
          <FcGoogle size={20} />
        </button>
      </section>
      <div id="or-container">
        <p>or</p>
      </div>
      <form onSubmit={handleSignupUser}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Martin"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
        <button>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};
