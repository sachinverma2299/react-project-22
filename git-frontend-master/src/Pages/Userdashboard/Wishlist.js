import Navi from './nav';
import './dashboard.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Land from './land'
import { saved } from '../../Store/userSlice';


const Wishlist=()=>{
    const dispatch=useDispatch()
  const [datab,setdata]=useState([])

  const{saving}=useSelector((state)=>state.login)
  const userid = localStorage.getItem('userId')
  
useEffect(()=>
{
    axios.get('http://localhost:9000/user').then((res)=>{setdata(res.data)
    console.log(res)}).catch((e)=>console.log(e))
},[])

useEffect(()=>
{
  console.log(datab)
//   dispatch(appliedfun({data:userid,newdb:datab}))
  dispatch(saved({data:userid,newdb:datab}))



},[datab])



return(
  <div className='back-image' style={{ 
  height:"100%", 
  width:"100%"}}>

    <Navi></Navi>
    <h1 className='itemsHeader my-5 py-4'>My Saved Jobs <i className='fa fa-heart'></i></h1>

    {
      saving.length===0?<div><h2>no Wishlist found</h2></div>:<div>  
    <Land value={saving} val2='wishlist'></Land>

      </div>
}
  </div>
  );
};


export default Wishlist