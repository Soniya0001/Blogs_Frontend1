import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Blogs.css"

const Blogs = () => {
    const [Blogs, setBlogs] = useState();
    useEffect(() => {
        const fetch = async () => {
            // await axios.get("http://localhost:1000/api/v1/getAll")
            await axios.get("https://blogs-backend1-1.onrender.com/api/v1/getAll")
                .then((res) => setBlogs(res.data.data));
        };
        fetch();
    }, []);
    return (
        <div className="container">
            <div className="row d-flex justify-content-center my-5">
                {Blogs && Blogs.map((item, i) => (
                    <div className="col-lg-3 blog-card m-3 p-3">

                        <Link to={`/BlogsPage/${item._id}`}>

                            <h4>{item.title}</h4></Link>{""}
                        <p>{item.description.slice(0, 400)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs;