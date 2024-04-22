import React from "react";
import WriteAndUpdate from "./WriteAndUpdate";
import {title} from "../../../App"

const WriteBlogs = ({title}) => {
    return (
        <div>
            <WriteAndUpdate title={title}/>
        </div>
    )
};
export default WriteBlogs;