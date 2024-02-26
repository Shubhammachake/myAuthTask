import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
    </nav>
  );
}
