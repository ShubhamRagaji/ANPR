import React, { useState } from "react";
import "./login.scss";
import username from "../../components/Images/username-icon.png";
import eye_icon from "../../components/Images/visibility-off.png";
import eye_icon1 from "../../components/Images/visibility-on.png";
import { useHistory } from "react-router-dom";

export default function RoleLogin(props) {
const history = useHistory()

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [togglepassword, settogglepassword] = useState(false);

  const submit = () => {
    
  };

  return (
    <div className="Role-Login">
      <div className="rl-login">
        <div className="rl-info">
          <h2>Welcome to </h2>
          <p>DTDC AI DASHBOARD</p>
        </div>
        <div className="rl-login-fields">
          <h2>Login</h2>
          <div className="username">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              autoFocus={true}
              onChange={(e) => setUsername(e.target.value)}
            />
            <img src={username} alt="username" className="username-icon" />
          </div>

          <div className="password">
            <input
              type={togglepassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {togglepassword ? (
              <img
                src={eye_icon1}
                alt="visibility-on"
                className="eye-icon"
                onClick={() => settogglepassword(false)}
              />
            ) : (
              <img
                src={eye_icon}
                alt="visibility-off"
                className="eye-icon"
                onClick={() => settogglepassword(true)}
              />
            )}
          </div>
          <button className="roleLogin-button" onClick={() => {
            if (Username === "admin" && Password === "admin@123") {
              history.push("/alerts")
              
              // window.location.replace("/alerts");
              // props.history.push("/alerts");
            } else {
              alert("Wrong Username or Password");
            }
          }}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
