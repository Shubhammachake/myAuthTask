import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPass: "",
  });

  const [passErr, setPassErr] = useState("");
  const [confirmPassErr, setConfirmPassErr] = useState("");
  const [show, setShow] = useState(false);
  let regXpass = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  const isValidPass = (value) => {
    return regXpass.test(value);
  };

  const [allRequired, setAllRequired] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      if (isValidPass(value)) {
        setPassErr("");
      } else {
        setPassErr(
          "Password must be 8 charecter 1 uppercase 1 special symball and 1 number"
        );
      }
    }

    if (name === "confirmPass") {
      if (value === data.password) {
        setConfirmPassErr("");
      } else {
        setConfirmPassErr("password Not Matching");
      }
    }

    setAllRequired("");

    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      data.fname == "" ||
      data.lname == "" ||
      data.email == "" ||
      data.mobile == "" ||
      data.confirmPass == "" ||
      data.password == ""
    ) {
      setAllRequired("All Fields Are required");
    } else {
      setAllRequired("");
    }
    if (
      !passErr &&
      data.fname !== "" &&
      data.email !== "" &&
      data.confirmPass !== "" &&
      data.lname !== "" &&
      data.mobile !== "" &&
      data.password !== ""
    ) {
      localStorage.setItem("credentials", JSON.stringify(data));
      alert("SignUp sucessfully");
      navigate("/Login");
    } else {
      navigate("/SignUp");
    }
  };

  const gotoLogin = () => {
    navigate("/Login");
  };

  console.log("mydataLocalStorage", localStorage.getItem("credentials"));
  return (
    <div className="Sign-div">
      <form onSubmit={handleSignUp}>
        <h3>Register Here</h3>
        <input
          type="text"
          placeholder="Enter First Name"
          name="fname"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lname"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <input
          type="number"
          placeholder="Enter Mobile"
          name="mobile"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        {passErr && <p>{passErr}</p>}
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPass"
          onChange={(e) => handleChange(e)}
        />
        {confirmPassErr && <p>{confirmPassErr}</p>}

        <br />
        {allRequired && <p>{allRequired}</p>}

        <div className="btns">
          <button type="submit">SignUp</button>
          <button onClick={gotoLogin}>Go Back</button>
        </div>
      </form>
    </div>
  );
}
