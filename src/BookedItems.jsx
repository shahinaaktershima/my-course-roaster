import BookedItem from "./BookedItem";

import PropTypes from 'prop-types';
const BookedItems = ({bookedItem,remaining,totalCredit,totalPrice}) => {
    
    return (
        <div className=" flex-1 md:w-[400px] w-[300px] shadow-xl bg-white rounded-xl p-6">
            <h3 className="text-2xl text-blue-500 py-2">Credit hour remaining:{remaining}</h3>
       <hr />
       <div className="py-2">
        <h3 className="text-2xl font-bold">Course name</h3>
        {
            bookedItem.map((item,idx)=><BookedItem key={idx} item={item}></BookedItem>)
        }
        
       </div>
       <hr />
       <h3 className="text-xl font-medium py-2">Total credit hour: {totalCredit}</h3>
       <hr />
       <h3 className="text-xl font-medium py-2">Total price: {totalPrice} USD</h3>
        </div>
       
       
    );
};
BookedItems.propTypes={
    bookedItem:PropTypes.array.isRequired,
    remaining:PropTypes.number,
    totalCredit:PropTypes.number,
    totalPrice:PropTypes.number,
   
   
    
}
export default BookedItems;