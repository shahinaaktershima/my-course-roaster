import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleItem}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        
            
          <div className=" grid lg:grid-cols-3 px-3 grid-cols-1 gap-5"> {
             blogs.map(blog=><Blog key={blog.id} blog={blog}
              
                handleItem={handleItem}  ></Blog>)
          }</div>
          
        
       
    );
};
Blogs.propTypes={
    
    handleItem:PropTypes.func,
    
}
export default Blogs;