import Navi from './nav';
import './dashboard.css'
import { useEffect,useState } from 'react';
import Land from './land'
import { useDispatch, useSelector } from "react-redux";
import { appliedfun } from '../../Store/userSlice';
import axios from "axios";


// store.dispatch(fetchSavedData())




const Application=()=>{



  const dispatch=useDispatch()
  const{applied}=useSelector((state)=>state.login)
  const userid = localStorage.getItem('userId')
  const [datab,setdata]=useState([])
  console.log(applied)
useEffect(()=>
{
    axios.get('http://localhost:9000/user').then((res)=>{setdata(res.data)
     console.log(res)}).catch((e)=>console.log(e))
    //  data.find((item)=>item._id===userid).then((res)=>{console.log(res)
    //  }).catch((e)=>console.log(e))
    console.log(datab)

},[])
useEffect(()=>
{
  console.log(datab)
  dispatch(appliedfun({data:userid,newdb:datab}))


},[datab])

 
return(
  <div className='back-image'>
    {console.log(applied)}
    <Navi></Navi>
    <h1 className='itemsHeader my-5 py-4'>Applied  Jobs</h1>
    {
      applied.length===0?<div><h2>no Application found</h2></div>:<div>  
    <Land value={applied} val2='applied'></Land>

      </div>
    }
    
  </div>
  );
};


export default Application