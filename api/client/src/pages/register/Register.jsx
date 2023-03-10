import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const [step,setStep]=useState(1);


  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login"><button className="loginButton"><span style={{color:'white'}}>Sign In</span></button></Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {step==1 ? (
          <div className="input">
            <input type="email" placeholder="email address" onChange={(e)=>setEmail(e.target.value)} />
            <button className="registerButton" onClick={()=>email?setStep(2):""}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}  />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
