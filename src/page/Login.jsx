import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem("name", "name");
  localStorage.setItem("password", "password");
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name == localStorage.getItem("name") &&
      password == localStorage.getItem("password")
    ) {
      history.push("/allUsers");
    }
  };
  return (
    <div>
      <Header />
      <section className="formSec">
        <form onSubmit={submitHandler}>
          <div>
            <label>
              UserName:{" "}
              <input
                type="text"
                style={{ marginLeft: "20px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <br />
          <div style={{ marginTop: "7px" }}>
            <label>
              Password:{" "}
              <input
                type="text"
                style={{ marginLeft: "27px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <br />
          <button
            type="submit"
            style={{
              padding: "10px",
              color: "white",
              backgroundColor: "black",
              cursor: "pointer",
              borderRadius: "7px",
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
