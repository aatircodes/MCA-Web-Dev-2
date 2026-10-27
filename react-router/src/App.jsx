import { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import About from "./components/About";
import CatchOthers from "./components/CatchOthers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

const posts = [
  {
    id: "1",
    title: "Getting Started with React Router",
    body: "React Router lets you handle navigation in a React app without full page reloads. In this post, we'll cover the basics of setting up routes and links.",
  },
  {
    id: "2",
    title: "Understanding useState and useEffect",
    body: "Hooks changed the way we write React components. useState lets you manage local state, while useEffect lets you run side effects like data fetching.",
  },
  {
    id: "3",
    title: "Why Component Composition Matters",
    body: "Instead of building giant monolithic components, breaking your UI into small reusable pieces makes your code easier to test, reason about, and maintain.",
  },
  {
    id: "4",
    title: "A Beginner's Guide to CSS Flexbox",
    body: "Flexbox is a one-dimensional layout system that makes it much easier to align and distribute items in a container, even when their size is unknown.",
  },
];

export const PostContext = createContext();

function App() {
  return (
    <PostContext.Provider value={posts}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />}>
              
           </Route>
           <Route path="posts/:postId" element={<Post />} />
          <Route path="/about" element={<About />} />
          
          <Route path="*" element={<CatchOthers />} />
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;


