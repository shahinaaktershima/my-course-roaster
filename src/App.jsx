
import { useState } from 'react'
import './App.css'
import Blogs from './assets/component/Blogs'
import BookedItems from './BookedItems';


function App() {
  
const [bookedItem,setBookedItem]=useState([]);
const [remaining,setRemainig]=useState(0);
const [totalCredit,setTotalCredit]=useState(0);
const [totalPrice,setPrice]=useState(0);
const handleItem=(items)=>{
  const isExist=bookedItem.find(item=>item.id==items.id);
  let count =items.credit;
  let price=items.price;
  
  // console.log(isExist);
  if(isExist){
   
    alert('you have already booked it');
   
  }
  else{
    bookedItem.forEach(item=>{
      count =count+item.credit;
      price=price+item.price;
    });
    // console.log(count);
    const remainingTotal=20-count;
   
    // console.log(remainingTotal);
    
    if(count>20){
      alert('you dont have enough credit')
    }
    else{
      setTotalCredit(count);
      setRemainig(remainingTotal);
      setPrice(price);
      const selectItem=[...bookedItem,items];
      setBookedItem(selectItem)
    }


   
  }
  
}

  return (
    <>
      
      <div className='md:text-3xl text-xl font-bold text-center my-4'>
      <h1 >Course Registration</h1>
      </div>
      <div className='container mx-auto gap-7 flex flex-col md:flex-row'><Blogs handleItem={handleItem} ></Blogs>
      <BookedItems bookedItem={bookedItem} totalCredit={totalCredit} remaining={remaining} totalPrice={totalPrice}></BookedItems>
      </div>
    </>
  )
}

export default App
