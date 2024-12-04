import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  //signup
  const signup = () => {
    let data = { name, email, password, userRole: role };
    axios
      .post("http://localhost:8080/api/auth/signup", data)
      .then((res) => {
        setIsSignUp(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //signin
  const login = () => {
    let data = { email, password };
    axios
      .post("http://localhost:8080/api/auth/login", data)
      .then((res) => {
        let token = res.data.jwt;
        localStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="auth-container">
      <h1>Book Management</h1>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

      {isSignUp && (
        <>
          <center><input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} /></center>
          <center><input type="number" placeholder="Enter role" onChange={(e) => setRole(e.target.value)} /></center>
        </>
      )}

      <center><input type="text" placeholder="Enter email" onChange={(e) => setMail(e.target.value)} /></center>
      <center><input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /></center>
      <center><button className={isSignUp ? "signup-btn" : "signin-btn"} onClick={isSignUp ? signup : login}>{isSignUp ? "Sign Up" : "Sign In"}</button></center>
      <center><button className={isSignUp ? "signup-btn" : "signin-btn"} onClick={toggleAuth}>{isSignUp ? "Sign In" : "Sign Up"}</button></center>

    </div>
  );
};

export default Auth;