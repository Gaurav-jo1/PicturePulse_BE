import React,{useState, useEffect} from "react";

// Tools
import { Link } from "react-router-dom";

//  media files
import Insta_log from "../../assets/Instagram_logo.webp";
import screenshot1  from "../../assets/screenshot1.webp"
import screenshot2  from "../../assets/screenshot2.webp"
import screenshot3  from "../../assets/screenshot3.webp"
import screenshot4  from "../../assets/screenshot4.webp"



import { IoLogoFacebook } from "react-icons/io";

import Getapp from "../../components/Getapp/Getapp";
// styling
import "./Login.scss";
import Footer from "../../components/Footer/Footer";
let screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

const Login = () => {
  const [screenshot, setScreenshot] = useState(screenshot1);
  useEffect(() => {
    const interval = setInterval(() => {
      setScreenshot(screenshots[Math.floor(Math.random() * screenshots.length)]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="Login_container">
      <div className="Login_container-Instagram_main">
        <div className="Login_container-home_phone">
          <div className="Login_container-home_screenshots">
            <img src={screenshot} alt="screenshot1" />
          </div>
        </div>
        <div className="Login_container-login_form-container">
          <div className="Login_container_login-form_box-1">
            <div className="Login_container-login-form_instagram-image">
              <img src={Insta_log} alt="Instagram" />
            </div>
            <div className="form_container-div">
              <form action="">
                <div className="form_container_inputs">
                  <div className="form_container-input_label_div">
                    <label>
                      <input type="text" name="username" required placeholder="Phone number, username, or email"/>
                    </label>
                  </div>
                  <div className="form_container-input_label_div">
                    <label>
                      <input type="password" name="password" placeholder="Password" required />
                    </label>
                  </div>
                  <div className="form_container-submit_div">
                    <button type="submit">Log in</button>
                  </div>
                </div>
                <div className="separator_OR">
                  <p className="one">
                    {" "}
                    <span>OR</span>{" "}
                  </p>
                </div>
                <div className="form_container_links">
                  <a className="Login_container_login-a" href="www.facebook.com">
                    <div className="Login_container_login_facebook">
                      <h2> <IoLogoFacebook /> </h2>
                      <p> &nbsp;Log in with Facebook </p>
                    </div>
                  </a>
                  <Link className="Login_container-forgot_password-p" to="/">
                    Forgot password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="Login_container_login-form_box-2">
            <p>
              {" "}
              Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </div>
          <div className="Login_container_login-form_box-3">
            <Getapp />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
