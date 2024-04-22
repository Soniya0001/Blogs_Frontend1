import React from "react";
import "./App.css"
import Navbar from "./components/Home/pages/navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home/pages/home";
import Blogs from "./components/Home/pages/Blogs";
import WriteBlogs from "./components/Home/pages/WriteAndUpdate";
import BlogsPage from "./components/Home/pages/BlogsPage"


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element= { <Home />} />
          <Route path="/Blogs" element= { <Blogs />} />
          <Route path="/WriteBlogs" element= { <WriteBlogs title={"Write"}/>} />
          <Route path="/BlogsPage/:id" element= { <BlogsPage />} />
          <Route path="/updateBlog/:id" element= { <WriteBlogs title={"Update"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
