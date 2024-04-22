import React from "react";
import axios from "axios";
import "../css/BlogsPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogsPage = () => {
    const id = useParams().id;
    const [Blog, setBlog] = useState();

    useEffect(() => {
        const fetch = async () => {
            // await axios.get(`http://localhost:1000/api/v1/getBlog/${id}`)
            await axios.get(`https://blogs-backend1.onrender.com/api/v1/getBlog/${id}`)
                .then((res) => setBlog(res.data.data));
        };
        fetch();
    }, [id]);
    return (
        <div className="page container width-class">
            <div className="my-3">

                {Blog && (
                    <div>
                        <Link to={`/updateBlog/${Blog._id}`} className="d-flex justify-content-end eLink">
                            <MdEditSquare />
                        </Link>

                        <h1 className="mt-2">{Blog.title}</h1>
                        <p className="blogspagepara mt-4">{Blog.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogsPage;