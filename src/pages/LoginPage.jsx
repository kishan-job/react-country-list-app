import React, { useState } from "react";
import Input from "../components/Input/Input";
import { signIn } from "../assets";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    usernameEmail: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState({
    usernameEmail: "",
    password: "",
  });
  const validate = () => {
    const newErrors = {};

    if (!userDetails.usernameEmail.trim()) {
      newErrors.usernameEmail = "Username or Email is required";
    } else if (!userDetails.password.trim()) {
      newErrors.password = "Password is required";
    } else if (userDetails.password.length < 8) {
      newErrors.password = "password required min 8 char";
    } else if (!/[A-Z]/.test(userDetails.password)) {
      newErrors.password = "Password must contain at least one capital letter";
    } else if (!/[0-9]/.test(userDetails.password)) {
      newErrors.password = "Password must contain at least one digit";
    } else if (!/[^a-zA-Z0-9]/.test(userDetails.password)) {
      newErrors.password = "Password must contain special char";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validate()) {
      console.log("login Attempted using UserDetails");

      setTimeout(() => {
        dispatch(loginSuccess());
        // alert(" login success");
        navigate("/home");
        setIsSubmitted(false);
        setUserDetails({
          usernameEmail: "",
          password: "",
        });
      }, 500);
    } else {
      setIsSubmitted(false);
    }
  };
  return (
    <header id="header">
      <div className="wrapper">
        <form action="" onSubmit={handelSubmit}>
          <div className="signINContainer">
            <h1>Sign IN</h1>
            <h4 className="creAcc">
              New user? <a href="#header">Create an account</a>
            </h4>

            <Input
              type="text"
              placeholder="Username or email"
              name="usernameEmail"
              error={error.usernameEmail}
              onChange={(e) => {
                setUserDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              error={error.password}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <div className="tick">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Keep me signed in</label>
            </div>

            <button className="singIn" type="submit" disabled={isSubmitted}>
              {isSubmitted ? "Signing In..." : "Sign In"}
            </button>

            <p>Or Sing In With</p>
            <div className="icons">
              <button>
                <FaGoogle size={20} />
              </button>
              <button>
                <FaFacebookF size={20} />
              </button>
              <button>
                <FaLinkedinIn size={20} />
              </button>
              <button>
                <FaTwitter size={20} />
              </button>
            </div>
          </div>
        </form>
        <img src={signIn} alt="headerImg" />
      </div>
    </header>
  );
}

export default LoginPage;
