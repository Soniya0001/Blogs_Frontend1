import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/WriteAndUpdate.css";
import { useParams, useNavigate } from "react-router-dom";


const WriteAndUpdate = ({ title }) => {
    const id = useParams().id;
    const history = useNavigate();
    const [Blog, setBlog] = useState({ title: "", description: "" });
    const change = (e) => {
        const { name, value } = e.target;
        setBlog({ ...Blog, [name]: value });
    };
    const submit = async () => {
        if (title === "Write") {
            // await axios.post("http://localhost:1000/api/v1/post", Blog).then((res) => alert(res.data.message));
            await axios.post("https://blogs-backend1-1.onrender.com/api/v1/post", Blog).then((res) => alert(res.data.message))
            setBlog({ title: "", description: "" });
        } else {
            // await axios.put(`http://localhost:1000/api/v1/updateBlog/${id}`, Blog).then((res) => alert(res.data.message));
            await axios.put(`https://blogs-backend1-1.onrender.com/api/v1/updateBlog/${id}`, Blog).then((res) => alert(res.data.message));
            history(`/BlogsPage/${id}`);
        }

    };
    useEffect(() => {
        const fetch = async () => {
            if (title === "Update") {
                // await axios.get(`http://localhost:1000/api/v1/getBlog/${id}`)
                await axios.get(`https://blogs-backend1-1.onrender.com/api/v1/getBlog/${id}`)
                    .then((res) => setBlog(res.data.data));

            }

        };
        fetch();
    }, [id, title])

    return (
        <div className="container">
            <h3>{title} Blogs</h3>
            <form>
                <div className="d-flex flex-column my-3">
                    <div class="mb-3 " >
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input type="text" class="form-control p-2 fs-5" name="title" id="exampleFormControlInput1" placeholder="Title" value={Blog.title} onChange={change} />
                    </div>

                    <div class="mb-3 " >
                        <label for="exampleFormControlTextarea1" class="form-label"></label>
                        <textarea class="form-control p-2 fs-5" name="description" id="exampleFormControlTextarea1" rows="3" value={Blog.description} placeholder="Description" onChange={change} ></textarea>
                    </div>

                    <div className="mt-4">
                        <button className="px-4 py-3 add-blog-btn" onClick={submit}>{title} Blog</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default WriteAndUpdate;