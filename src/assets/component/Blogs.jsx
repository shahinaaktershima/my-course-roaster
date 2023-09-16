import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({handleItem}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('src/fakedata.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <div>
            
          <div className="flex"> <div className="grid md:grid-cols-3 grid-cols-1 gap-5"> {
             blogs.map(blog=><Blog key={blog.id} blog={blog}
              
                handleItem={handleItem}    ></Blog>)
          }</div>
          <div></div></div>
        </div>
       
    );
};

export default Blogs;