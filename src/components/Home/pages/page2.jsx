import React from "react";
import axios from "axios";
import "../css/Page2.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Page2 = () => {
    const [Blogs, setBlogs] = useState();
    useEffect(() => {
        const fetch = async () => {
            try {
                await axios
                    // .get("http://localhost:1000/api/v1/getRecentBlogs")
                    .get("https://blogs-backend1-1.onrender.com/api/v1/getRecentBlogs")
                    .then((res) => setBlogs(res.data.data));
            } catch (error) {
                alert("Some error occured")
            }
        };
        fetch();
    }, []);
    console.log(Blogs);


    return (
        <div className="page container pg2">
            {Blogs && Blogs.map((item, i) => (
                <div>
                    <Link className="link-front-page" to={`/BlogsPage/${item._id}`}>
                        <h1>{item.title}</h1>
                    </Link>

                    <p>{item.description.slice(0, 500)}...</p>
                </div>
            ))}
        </div>
    )
};

export default Page2