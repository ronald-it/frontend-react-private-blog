import React from "react";
import {Link} from "react-router-dom";


function Overviewpage({blogArray}) {

    console.log(blogArray)

    const blogTitles = blogArray.map((blog) => {
        return <Link to={`/blogposts/${blog.id}`} key={blog.id}>
            <li>{blog.title}</li>
        </Link>
    })

    return <>
        <h2>Blogoverzichtspagina</h2>
        <h3>Aantal blogposts: {blogArray.length}</h3>
        <ul>
            {blogTitles}
        </ul>
    </>
}

export default Overviewpage;