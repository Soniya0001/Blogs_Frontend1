import React from "react";
import Page1 from "./Page1";
import Page2 from "./page2";

const Home = () => {
    return (
        <div >
            <Page1 />
            <div className="d-flex container justify-content-center align-items-center my-4">
                <div className=" container d-flex justify-content-center align-items-center ">
                    <h3>Latest Blogs</h3>
                </div>
            </div>
            <Page2 />
        </div>
    )
}


export default Home