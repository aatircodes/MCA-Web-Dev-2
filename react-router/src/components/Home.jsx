import { useContext } from "react";
import { PostContext } from "../App";
import "./app.css"
import { useNavigate } from "react-router-dom"; // not useNavigation

const Home = () => {
  const posts = useContext(PostContext);

  const navigate = useNavigate()

  function handleClick(postId) {
  navigate(`/posts/${postId}`);
}

  return (

    <div id="main">

      {posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <p>Id: {post.id}</p>
            <h2>Title: {post.title}</h2>
            <p>Body: {post.body}</p>
            <br />
            <button onClick={() => handleClick(post.id)}>Click to Read</button>
          </div>
        );
      })}
      
    </div>

  );
};

export default Home;
