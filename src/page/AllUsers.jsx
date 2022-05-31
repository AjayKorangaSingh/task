import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Posts from "./Posts";
import UserInfo from "./UserInfo";

const AllUsers = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const helper = async () => {
      await axios.get("https://api.github.com/users").then((response) => {
        setPost(response.data);
      });
    };
    helper();
  }, []);

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>
        List Of All Users - Please use toggle here
      </h1>
      <Posts post={post} />
    </>
  );
};

export default AllUsers;
