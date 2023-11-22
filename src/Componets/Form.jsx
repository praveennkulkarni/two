import React, { useState } from "react";

const Form = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [cpassword, setCpassword] = useState();

  let handleData = (e) => {
    e.preventDefault();
    if (password === setCpassword)
      console.log(name, email, password, cpassword);
  };
  return (
    <div className="main">
      <form onSubmit={handleData}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>CPassword</label>
        <input
          type="password"
          placeholder="Enter Cpassword"
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
