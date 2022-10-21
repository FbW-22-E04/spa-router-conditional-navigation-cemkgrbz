import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });


  const navigate = useNavigate()

  const handleLogin = (e) => {
    setData({
        ...data, 
        [e.target.id]: e.target.value
    });
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (data.userName === "john doe" && data.password === "r3@ct") {
        return navigate("/home")
        } else {
          alert('wrong username and password')
        }
    }

  return (
    <>
      <h1>Login</h1>
      
         {(data.userName !== "john doe" || data.password !== "r3@ct") &&<p className="inc-alert">The username or password is incorrect!</p>}

      
      <form>
        <input type="text" name="userName" placeholder="Username" id="userName" onChange={handleLogin}/>

        <input type="password" name="password" placeholder="Password" id="password" onChange={handleLogin}/>

        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
    </>
  );
};
