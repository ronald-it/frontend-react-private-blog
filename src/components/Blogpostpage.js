import React from "react";
import posts from "../data/posts.json"
import { useParams } from "react-router-dom";

function Blogpostpage() {
    const { blogId } = useParams();

    console.log(blogId)

    return <>
        <h2>{posts[blogId-1].title}</h2>
        <p>{posts[blogId-1].date}</p>
        <p>{posts[blogId-1].content}</p>
    </>
}

export default Blogpostpage;