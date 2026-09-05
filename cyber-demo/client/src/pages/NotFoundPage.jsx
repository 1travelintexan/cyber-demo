import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Oppssss...... you wandered too far</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
