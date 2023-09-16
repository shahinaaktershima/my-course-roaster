

const BookedItem = ({item}) => {
    const {courseName}=item;
    return (
       
            <div>
             <h3>{courseName}</h3>
            </div>
    );
};

export default BookedItem;