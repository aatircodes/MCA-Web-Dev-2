import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../App";

const Post = () => {
  const { postId } = useParams(); // grabs the value from the URL
  const posts = useContext(PostContext);

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;