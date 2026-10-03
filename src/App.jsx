import { useState } from 'react'
import './App.css'
import Navbar from './navbar.jsx';
import RightCardContent from './rightcardcontent.jsx';
import LeftContent from './leftcontent.jsx';
import RightCard from './rightcard.jsx';

function App() {
  return (
  <div className='min-h-screen w-full flex flex-col'>
    <Navbar />
  <div className='flex flex-row flex-1 w-full gap-4 p-4'>
        <LeftContent />
        <div className='flex flex-row gap-22 p-4'>
        <RightCard style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661575201264-959798ecc47a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYWNlJTIwb2YlMjB3b3JrfGVufDB8MXwwfHx8MA%3D%3D')` }} id="1" content="Guide groups based on demographics, behavior, or needs, allowing businesses to launch highly targeted, high-converting marketing campaigns." Tag="Satisfied" />
        <RightCard style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D')` }} id="2" content="Guide groups based on demographics, behavior, or needs, allowing businesses to launch highly targeted, high-converting marketing campaigns." Tag="Underserved" />
        <RightCard style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D')` }} id="3" content="Guide groups based on demographics, behavior, or needs, allowing businesses to launch highly targeted, high-converting marketing campaigns." Tag="Underbanked" />
       
       </div>
      
  </div>
  </div>
)

  
}
export default App;