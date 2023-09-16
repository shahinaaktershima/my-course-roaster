import BookedItem from "./BookedItem";


const BookedItems = ({bookedItem}) => {
    
    return (
        <div className="flex-1 shadow-xl bg-white rounded-xl p-6">
            <h3 className="text-2xl text-blue-500 py-2">Credit hour remaining:</h3>
       <hr />
       <div className="py-2">
        <h3 className="text-2xl font-bold">Course name</h3>
        {
            bookedItem.map((item,idx)=><BookedItem key={idx} item={item}></BookedItem>)
        }
        
       </div>
       <hr />
       <h3 className="text-xl font-medium py-2">total credit hour:</h3>
       <hr />
       <h3 className="text-xl font-medium py-2">total price:</h3>
        </div>
       
       
    );
};

export default BookedItems;