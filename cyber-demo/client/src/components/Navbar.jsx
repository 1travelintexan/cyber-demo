import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img alt="logo" />
      <h1>Ironhack</h1>
      <section>
        <Link to={`/`}>
          <button>Signup</button>
        </Link>

        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </section>
    </nav>
  );
};
export default Navbar;
