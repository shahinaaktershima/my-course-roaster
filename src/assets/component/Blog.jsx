import { FaBookOpen , FaDollarSign } from 'react-icons/fa';

const Blog = ({blog,handleItem}) => {
 const {id,image,courseName,credit,price,details}=blog;
    return (
       
           <div className="w-[300px] h-[500px] rounded-xl shadow-md bg-white p-2 space-y-2">
             <img className="w-full h-1/2" src={image} alt="" />
            <h2 className="text-xl font-bold">{courseName}</h2>
            <p>{details}</p>
            <div className='flex gap-2' >
                <span  className='flex items-center'> <FaDollarSign></FaDollarSign> </span>
                <span className="">price:  {price}</span>
                <span className='flex items-center'><FaBookOpen></FaBookOpen></span>
                <span> credit:  {credit}hr</span>
            </div>
            <button onClick={()=>handleItem(blog)} className="text-white bg-blue-400 w-full rounded-md text-xl py-1">Select</button>
            </div>
            
        
    );
};

export default Blog;