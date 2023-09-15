
import './App.css'
import Blogs from './assets/component/Blogs'
import BookedItem from './assets/component/BookedItem'

function App() {
  

  return (
    <>
      
      <h1 className='text-3xl font-bold text-center my-6'>Course Registration</h1>
      <div className='container mx-auto flex gap-7'><Blogs></Blogs>
      <BookedItem></BookedItem></div>
    </>
  )
}

export default App
