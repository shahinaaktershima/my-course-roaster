

const BookedItem = ({item}) => {
    const {courseName}=item;
    return (
       
            <div>
             <h3 className="font-semibold">{courseName}</h3>
            </div>
    );
};

export default BookedItem;