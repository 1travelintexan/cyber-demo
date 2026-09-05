import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    <div>
      <h2>Sign up with us :)</h2>
      <form onSubmit={handleSignupUser}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Sign Up!</button>
      </form>
    </div>
  );
};
