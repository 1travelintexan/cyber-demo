import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
export const HomePage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const { data } = await axios.get("http://localhost:5005/auth/verify", {
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, []);
  return (
    <div>
      <Navbar />
      <div id="profile-page">
        <h1>Build Your Profile</h1>
        <p>The more you share, the better we can guide you.</p>
        <section id="progess-container">
          <div id="progess-bar"></div>
          <p>Profile 40% complete</p>
        </section>
        <div className="user-section">
          <div id="user-image">
            <h1>{user && user.username[0]}</h1>
          </div>
          <section className="user-inputs">
            <label>Name</label>
            <input
              type="text"
              className="long-input"
              value={user && user.username}
            />
            <label>Current Role</label>
            <input type="text" value="Teachers Assistant" />
            <label>Location</label>
            <input type="text" value="Magnolia, Tx" />
          </section>
        </div>
        <h3>Your Background</h3>
        <div className="line-break"></div>
        <div className="background-container">
          <section>
            <label>Years of Experience</label>
            <select>
              <option>5-10 Years</option>
            </select>
          </section>
          <section>
            <label>Industry</label>
            <select>
              <option>Retail & Consumer Goods</option>
            </select>
          </section>
        </div>
        <h3>Skills</h3>
        <div className="line-break"></div>
        <div className="skills-container">
          <button>Project Mgmt</button>
          <button>Data Analysis</button>
          <button>Communication</button>
          <button>+ Add Skill</button>
        </div>
      </div>
    </div>
  );
};
