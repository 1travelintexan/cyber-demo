import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
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
        <h6>Resources</h6>
      </Link>
    </nav>
  );
};
export default Navbar;
