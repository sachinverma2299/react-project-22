import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import "../../../CSS/AdminDashboard.css"
import { Chart } from "react-google-charts";
import Footer from "../../../Components/Footer"
function AdminDashboard(){
  const{jobdata}=useSelector((state)=>state.login)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const data = [
      ["Task", "Hours per Day"],
      ["Accepted", 5],
      ["Rejected", 2],
      ["Number of Jobs", 11],
      ["Total Applicants", 20],
      
    ];
   const options = {
      title: "Posted Jobs Data",
      is3D: true,
      backgroundColor: { fill:'transparent',strokeWidth: 5, },
    };
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
    return(
        <div className="back-image">
            <AdminNav></AdminNav>

            <div>
            <div className="row ">
            <div className="admin-calen">
<div className="col-sm-12">
<h2 className="text-shruthi"> Welcome {name}</h2>
<Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"200px"}
        
      />

</div>
</div>
</div>
<div>
<h1>You Need to Hire!!</h1>
<div class="row"> 
  <div class="col-sm-3 ">
    <div className="card colour card-1 card-hover">
      <div class="card-body">
        <h1 class="card-title">4</h1>
        <Link to="/applicants"  className="card-link"><h3 class="card-text">Applicants</h3></Link>
        <i class="fa fa-user card-icon"></i>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card colour card-2 card-hover">
      <div class="card-body">
        <h1 class="card-title">2</h1>
        <Link to="/myEmployees" className="card-link"><h3 class="card-text">Employees</h3></Link>
        <i class="fa fa-file card-icon"></i>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card colour card-3 card-hover">
      <div class="card-body">
        <h1 class="card-title">7</h1>
        <h3 class="card-text">Notifications</h3>
        <i class="fa fa-envelope card-icon"></i>
      </div>
    </div>
  </div>
  <div class="col-sm-3 ">
    <div class="card colour card-4 card-hover">
      <div class="card-body">
        <h1 class="card-title">12</h1>
        <Link to="/myjobs" className="card-link"><h3 class="card-text">Bookmark Jobs</h3></Link>
        <i class="fa fa-bookmark-o card-icon"></i>

      </div>
    </div>
  </div>
  </div>

</div>
<img src="https://t3.ftcdn.net/jpg/02/33/12/44/240_F_233124436_78mVMPy74gldjeo6rdyJgRklPIGSAwl7.jpg" className="pic-admin thumbnail" alt="..."/>
<h1 className=''>Hire character. Train skill </h1>
<h2 className=''>It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do</h2>
<div className="admin-colour-container">
    <h2 style={{color:"white"}}>Acquiring the right talent is the most important key to growth. Hiring was — and still is — the most important thing we do</h2><div className="container-admin">
<img src="https://t4.ftcdn.net/jpg/04/96/27/97/240_F_496279754_N7gxd0CWlsLn952lCWHnss3TrA1s90b2.jpg" class="pic-admin thumbnail" alt="..."/>

<button className="btn"><Link className="link-admin" to="/addjobs">Post Job</Link></button>

</div>
</div>

<div className="admin-colour-container two">
    <h2 className="admin-text">The most dangerous leadership myth is that leaders are born-that there is a genetic factor to leadership. That’s nonsense; in fact, the opposite is true. Leaders are made rather than born.</h2><div className="container-admin c-2">
<img src="https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg?size=626&ext=jpg&ga=GA1.2.1034677208.1662904499" class="thumbnail " alt="..."/>

</div>
</div>

</div>
<Footer></Footer>

</div>

    )
}
export default AdminDashboard