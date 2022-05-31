import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserInfo from "./UserInfo";

const SinglePost = ({ post, id }) => {
  const [display, setDisplay] = useState(false);
  const history = useHistory();
  const handler = () => {
    setDisplay(!display);
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handler}>
      {post.login}
      {display ? (
        <div>
          <UserInfo post={post} id={id} />
        </div>
      ) : null}
    </div>
  );
};

export default SinglePost;
