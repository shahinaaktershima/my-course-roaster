import PropTypes from 'prop-types';

const BookedItem = ({item}) => {
    const {courseName,id}=item;
    
    return (
       
            <div> <li className="font-semibold" key={id}>{courseName}</li></div>
               
            
                
                
               
            
            
    );
};
BookedItem.propTypes={
    item:PropTypes.object.isRequired
}
export default BookedItem;