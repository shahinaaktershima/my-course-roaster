
import { useState } from 'react'
import './App.css'
import Blogs from './assets/component/Blogs'
import BookedItems from './BookedItems';


function App() {
  
const [bookedItem,setBookedItem]=useState([]);
const [price,setPrice]=useState();
const handleItem=(item)=>{
  const selectItem=[...bookedItem,item];
  setBookedItem(selectItem)
}
  return (
    <>
      
      <h1 className='text-3xl font-bold text-center my-6'>Course Registration</h1>
      <div className='container mx-auto flex gap-7'><Blogs handleItem={handleItem}></Blogs>
      <BookedItems bookedItem={bookedItem}></BookedItems>
      </div>
    </>
  )
}

export default App
