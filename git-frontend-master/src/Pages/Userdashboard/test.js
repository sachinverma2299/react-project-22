import React from "react";
import data from "./data";
import Navi from "./nav";
import './dashboard.css'
import store from '../../Store/store'
import fetchData from '../../Store/userSlice'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";


const Dashboard=()=>
{
    const{jobdata}=useSelector((state)=>state.login.jobdata)
    // const{sorted}=useSelector((state)=>state.login.sorted)
    const[search,setsearch]=useState('')
    const [sorting,setsorting]=useState(false)
   const dispatch=useDispatch()

    const searchitem=(e)=>
    {
        e.preventDefault();
        setsearch(e.target.value)
    }
    const sortfun=(e,key)=>
    {
        setsorting(true)
        // dispatch(sorted({data:key}))
    }
return  (
    <div>
        <Navi></Navi>
        {console.log('hello')}
        <div>
        <h1 className="heading">Jobs</h1>
        <form class="searching d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>searchitem(e)}></input>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <div>
      <button class="btn btn-dark dropdown-toggle mid" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Job Type
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button class="btn btn-dark" onClick={(e)=>sortfun(e,'fulltime')}>fullTime</button></li>
    <li><button class="btn btn-dark" onClick={(e)=>sortfun(e,'parttime')}>Part Time</button></li>
    <li><button class="btn btn-dark" onClick={(e)=>sortfun(e,'wfh')}>work from Home</button></li>
  </ul>
        </div>
      </div>
         {  
            jobdata[0].filter((val)=>
            {
                if(search=="")
                    return val
                else if(val.title.toLowerCase().includes(search.toLowerCase()))
                    return val
            }).map((item)=>(
                <div>
                {

                    console.log(jobdata[0][0],'hii')
                }
                <div class="card my-4">
                <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Role: {item.jobType}</h6>
                <p class="card-text">Salary: {item.salary} per month</p>
                <p class="card-text">Duration: {item.duration} months </p>
                </div>
  </div>
</div>
            ))
        } 
    </div>
)
}
export default Dashboard