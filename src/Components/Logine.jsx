import React, { useState } from "react";
import {useContext} from 'react'
import UserContext from "../context/UserContext";

function Logine({ setIsSubmitted }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
      const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({userName,password})
    setIsSubmitted(true)


    // if (userName && password) {
    //   setIsSubmitted(true); // ✅ tell Layout login was successful
    // } else {
    //   alert("Please enter username and password");
    // }
  };

  return (
    <form onSubmit={handleSubmit}
    className=" border-e-green-400 backdrop-blur-lg  w-screen h-auto flex flex-col justify-center items-center gap-4 py-12 "
    >
      <h4>Demo account </h4>

      <div className="flex flex-col gap-2.5  ">


        <label htmlFor="rk">Name :</label>
      <input

      className="border border-white rounded-sm bg-white text-black px-15 py-2.5"
      id="rk"
      type="text"
      placeholder="Enter Username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      />



      <label htmlFor="rk2">Email : </label>
      <input
      id="rk2"
      className="border border-white rounded-sm bg-white text-black px-15 py-2.5"
      
        type="email"
        placeholder="Enter Email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        </div>
      <button
      className="appearance-none  border-none p-0 outline-none shadow-none text-white px-4 py-2 rounded-md hover:bg-blue-600 "
      type="submit">Submit</button>
    </form>
  );
}

export default Logine;
