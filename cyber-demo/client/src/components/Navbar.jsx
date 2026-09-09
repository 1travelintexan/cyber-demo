import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const nav = useNavigate();
  async function handleLogout() {
    localStorage.removeItem("authToken");
    nav("/login");
  }
  return (
    <nav>
      <img alt="logo" src={logo} />
      <h6>Career Guide</h6>
      <Link>
        <h6>Home</h6>
      </Link>
      <Link>
        <h6>My Profile</h6>
      </Link>
      <Link>
        <h6>Matches</h6>
      </Link>
      <Link>
        <h6 onClick={handleLogout}>Logout</h6>
      </Link>
    </nav>
  );
};
export default Navbar;
