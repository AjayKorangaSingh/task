import React from "react";
import SinglePost from "./SinglePost";

const Posts = ({ post }) => {
  return (
    <div>
      <h1>User Information</h1>
      {post?.map((post) => {
        return (
          <li style={{ listStyle: "none", marginLeft: "20px" }} key={post.id}>
            <SinglePost post={post} id={post.id} />
          </li>
        );
      })}
    </div>
  );
};

export default React.memo(Posts);
