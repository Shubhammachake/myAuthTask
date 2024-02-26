import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const myCredentials = JSON.parse(localStorage.getItem("credentials"));
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      myCredentials &&
      data.password === myCredentials.password &&
      data.email === myCredentials.email
    ) {
      alert("Login Sucess");
    } else {
      alert("user Not Found");
    }
  };

  console.log("from Login", myCredentials);
  return (
    <div className="Login-div">
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => handleChange(e)}
          name="email"
        />
        <br />
        <input
          type="Password"
          placeholder="Enter Password"
          required
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type="submit">Login</button>
        <br />
        <Link to="/SignUp">Register Here</Link>
      </form>
    </div>
  );
}
