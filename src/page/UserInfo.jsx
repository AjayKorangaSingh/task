import React from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

const UserInfo = ({ post, id }) => {
  const history = useHistory();
  console.log(post);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Information of Single User</h1>
      <p style={{ textAlign: "center" }}>
        <b>Name - </b> {post.login}
      </p>
      <p style={{ textAlign: "center" }}>
        <b>Last Name - </b> {post.node_id}
      </p>
    </>
  );
};

export default UserInfo;
