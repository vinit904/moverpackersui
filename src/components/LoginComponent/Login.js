import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { __userapiurl } from '../../API_URL';

import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LfAqjEsAAAAAM6WxUaL8uOwhbTJXDWAbUFm9dT0";


{/* 
  import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "your_site_key_here";

function ContactForm() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setError("Please complete the reCAPTCHA");
      return;
    }

    const payload = {
      ...formData,
      recaptchaToken: captchaValue,
    };

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Form submitted successfully!");
        setError("");
        setCaptchaValue(null);
      } else {
        setError(data.message || "Submission failed");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
      
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}
export default ContactForm;
  */}

function Login() {

  const popupStyle = {
    position: "fixed",
    top: "20px",
    left: "0",
    right: "0",
    width: "100%",
    height: "20px",
    backgroundColor: "#4caf50",
    padding: "0 20px",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999",
  };

  const navigate = useNavigate();

  const [captchaValue, setCaptchaValue] = useState(null);
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPopup, setShowPopup] = useState(false);



  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setError("");
  };

  const handleSubmit = (e) => {


    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return setOutput("*Please enter a valid email address");
    }
    if (!password) return setOutput("*Password is required");
    if (!captchaValue) return setError("Please complete the reCAPTCHA");

    const userDetail = { "email": email, "password": password };
    axios.post(__userapiurl + "login", userDetail).then((response) => {
      const userData = response.data.user;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", userData.email);
      localStorage.setItem("mobile", userData.mobile);
      localStorage.setItem("address", userData.address);
      localStorage.setItem("city", userData.city);
      localStorage.setItem("gender", userData.gender);
      localStorage.setItem("role", userData.role);
      localStorage.setItem("info", userData.info);

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        userData.role == "admin" ? navigate("/admin") : navigate("/user");
      }, 1000);



    }).catch(() => {
      setOutput("Please Enter Valid Email & Password")
      setEmail("");
      setPassword("")
    });
  }

  return (
    <>

      {/* <section id="login" className="login-form">
        
        <h3>{output}</h3>
        <form id="loginForm">

          <div class="form-group">
            <label >Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              autocomplete="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div class="form-group">
            <label >Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              minlength="8"
              autocomplete="current-password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />


          <div class="form-actions">
            <button type="button" onClick={handleSubmit} class="btn-primary">Login</button>
          </div>


          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </section> */}
      <section id="login" class="form-section">
        <h2>Login</h2>

        <h3>{output}</h3>

        <form class="form-card">

          <div class="form-field">
            <label >Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              autocomplete="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>


          <div class="form-field">
            <label >Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              minlength="8"
              autocomplete="current-password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>


          <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />


          <div class="form-actions">
            <button type="button" onClick={handleSubmit} class="btn-primary">Login</button>
            <p>forget password to click here <Link to="/forget-password">forget password</Link></p>

            {showPopup && (
              <div style={popupStyle}>
                ✅ Successfully logged in!
              </div>
            )}


          </div>


          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </section>






    </>
  );
}

export default Login;




