import React, { useState } from "react";
import data from "./data";
import Navi from "./nav";
import './dashboard.css'
import store from '../../Store/store'
import fetchData from '../../Store/userSlice'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sorting,sortdate } from "../../Store/userSlice";
import Card from "./card";
import Profile from "./Profile";
import axios from 'axios';
import Footer from "../../Components/Footer";

// store.dispatch(fetchData())
const Dashboard=()=>
{
    const dispatch=useDispatch()
    const{jobdata,sorted}=useSelector((state)=>state.login)
    const[issort,setissort]=useState('initial')
    const[search,setsearch]=useState('')
    const [toggle,settoggle]=useState(true)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    //console.log(jobdata)
    console.log(sorted)
    const sortfun=(e,key)=>
    {
        settoggle(!toggle)
        dispatch(sorting({data:key,test:toggle}))
        setissort('sort')
    }
    const searchitem=(e)=>
    {
        e.preventDefault();
        setsearch(e.target.value)
        // console.log(search)
    }
    const date=(e,key)=>
    {
      dispatch(sortdate({data:key}))
      setissort('sort')


    }
    useEffect(()=>{
      const userid = localStorage.getItem('userId');
      console.log("userid",userid);
      axios.post('http://localhost:9000/profile',{userid})
      .then((res)=>{
          console.log("res from profile = ",res.data);
          setName(res.data.name);
          setEmail(res.data.email)
      })
      .catch((err)=>{
          console.log("err from profile",err);
      })
  },[])
return  (
    <div className="back-image">
      <Navi></Navi>        
        {console.log('hello')}
        <div>
        <h1 className="text1">Welcome <b>{name}</b> to your Jobs Portal</h1>
      </div>
      <div class="bbbootstrap-dashboard">
<div class="container">
  <img src="data:image/png;base64,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"/>
<h1 class="text1">Search Jobs For Your Perfect Career!!</h1>
<form className="searchbar">

  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input style={{border:"2px solid black", borderRadius:"30px", padding:"15px"}} type="text" id="Form_Search"  placeholder="Search for your best result in our community" role="searchbox" class="InputBox my-5" autocomplete="off"onChange={(e)=>searchitem(e)}/><h2></h2>
</form>
</div>
</div>
      <div className="sort my-4">
      <div className="btn-group align-items-center">
        <button class="btnsort dropdown-toggle mt-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Job Type
  </button>

  <ul class="dropdown-menu filter" aria-labelledby="dropdownMenuButton1">
    <li className="filter_element"><button class="btn" onClick={(e)=>sortfun(e,'fulltime')}>fullTime</button></li>
    <li className="filter_element"><button class="btn" onClick={(e)=>sortfun(e,'parttime')}>Part Time</button></li>
    <li className="filter_element"><button class="btn" onClick={(e)=>sortfun(e,'wfh')}>work from Home</button></li>
  </ul>
  </div> 
  <div class="col-sm-3">
  <button class="btnsort mt-4" onClick={(e)=>sortfun(e,'duration')}>duration</button>
  </div>
  <div class="col-sm-3">

  <button class="mt-4 btnsort" onClick={(e)=>sortfun(e,'salary')}>Salary</button>
  </div>
  <div class="col-sm-3 ">
  <button class="mt-4 btnsort" onClick={(e)=>date(e,'date')}>Date</button>
  </div>
        </div>
        {issort==='initial'?<Card value={jobdata} val2={search}></Card>:
        issort==='sort'?<Card value={sorted} val2={search}></Card>:
        <div></div>}
        <br></br>
        
 <Footer></Footer>
    </div> 
)
}
export default Dashboard