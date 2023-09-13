import { useState } from 'react'
import Swal from 'sweetalert2';
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'
import { useEffect } from 'react';
import Carts from './Component/Carts/Carts'
import 'animate.css';

function App() {
  const [values , setValues] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [blogTitle , setBlogTitle] = useState([]);
  useEffect(()=>{
    fetch('Data.json')
    .then(res => res.json())
    .then(data=> setValues(data))
  },[])

  const handleSelect = value=>{
    const newTitle = [...blogTitle , value];
    const isClick = blogTitle.find(item => item.id === value.id)
    console.log(isClick)
    if(isClick){
      return Swal.fire({
  title: 'Custom animation with Animate.css',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
    }
    else{
      setBlogTitle(newTitle)
    }

  }


  const handleMarkRead = time =>{
    setReadTime(readTime + time)
  }

  return (
    <div>
      <Header></Header>
      <div className='max-w-[1400px] mx-auto lg:px-16 md:px-8 px-4 my-10'>
       <div className='md:flex  gap-3'>
         <Blogs handleMarkRead={handleMarkRead} handleSelect={handleSelect} values={values}></Blogs>
        <Carts readTime={readTime} blogTitle={blogTitle}></Carts>
       </div>
      </div>
    </div>
  )
}

export default App
