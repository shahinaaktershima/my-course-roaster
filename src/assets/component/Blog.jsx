import { FaBookOpen , FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';


const Blog = ({blog,handleItem}) => {
 const {image,courseName,credit,price,details}=blog;
    return (
       
           <div className="w-[300px] h-[350px] rounded-xl shadow-md bg-white p-2 space-y-2">
             <img className="w-full h-1/3" src={image} alt="" />
            <h2 className="text-xl font-bold">{courseName}</h2>
            <p>{details}</p>
            <div className='flex gap-2' >
                <span  className='flex items-center'> <FaDollarSign></FaDollarSign> </span>
                <span className="">price:  {price}</span>
                <span className='flex items-center'><FaBookOpen></FaBookOpen></span>
                <span> credit:  {credit}hr</span>
            </div>
            <button onClick={()=>handleItem(blog)}  className="text-white bg-blue-400 w-full left-0  rounded-md text-xl py-1 ">Select</button>
            
            </div>
            
        
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleItem:PropTypes.func,
    
}
export default Blog;