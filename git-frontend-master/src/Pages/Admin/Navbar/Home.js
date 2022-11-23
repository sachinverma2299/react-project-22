import React from 'react'
import AdminNav from './AdminNav';

const Applications = () => {
  
const handleShortlist=(e)=>{
    e.preventDefault();
    console.log("shortlist button clicked");
}
const handleReject=(e)=>{
    e.preventDefault();
    console.log("reject button clicked");
}

  return (
    <div>
      <AdminNav></AdminNav> <h1>Applications</h1>
      <div className=' shadow-lg mb-5 col mx-4 my-2 p-2 d-flex gap-1'>
        <div className='col-3 bg-info'>
          <img style={{ width: '83%', height: "82%" }} className='my-4 align-items-center rounded-circle' src="https://www.gstatic.com/webp/gallery/1.sm.jpg" alt="image not found"></img>
        </div>
        <div className='col-6 bg-warning'>
          <h1 className='d-flex m-1 p-1'>Name:</h1>
          <h2 className='d-flex m-1 p-1'>stars</h2>
          <h2 className='d-flex m-1 p-1'>Applied on: Date</h2>
          <h2 className='d-flex m-1 p-1'>Education: </h2>
          <h2 className='d-flex m-1 p-1'>SOP: </h2>
          <h2 className='d-flex m-1 p-1'>skills</h2>
        </div>
        <div className='col-3 bg-dark'>
          
          <div className='h-50'>
            <button onClick={(e) => handleShortlist(e)} style={{ width: '45%', height: '86%' }} className='my-2 mx-1 p-3 btn btn-success'>Shortlist</button>
            <button onClick={(e) => handleReject(e)} style={{ width: '45%', height: '86%' }} className='my-2 mx-1 p-3 btn btn-danger'>Reject</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Applications
