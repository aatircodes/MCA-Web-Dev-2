import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { PostContext } from "../App";

const Posts = () => {
  const posts = useContext(PostContext);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Posts;