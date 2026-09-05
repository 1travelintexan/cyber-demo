import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Login Here</h2>
      <form onSubmit={handleLoginUser}>
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
        <button>Login</button>
      </form>
    </div>
  );
};
