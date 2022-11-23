import React  ,{useState}from 'react'
import { useSelector } from 'react-redux';
import Carousel from 'better-react-carousel'
import Navbar from '../Components/Navbar';
import "../CSS/Search.css"
import Footer from '../Components/Footer';
import "../CSS/MainPage.css"
import Card from './Userdashboard/card';
const MainPage = () => {
  const{jobdata}=useSelector((state)=>state.login.jobdata)
  const[search,setsearch]=useState('')

console.log(jobdata)
  const searchitem=(e)=>
    {
        e.preventDefault();
        setsearch(e.target.value)
        console.log(search)
    }
    
  return(
    <div> 
      <Navbar></Navbar>

   
<div class="bbbootstrap">
<div class="container">
<h1>Get the perfect Match For Your Career!!</h1>
<form>

  <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input type="text" id="Form_Search"  placeholder="Search for your best result in our community" role="searchbox" class="InputBox " autocomplete="off"onChange={(e)=>searchitem(e)}/><input type="submit" id="Form_Go" class="Button" value="GO"/>
</form>
</div>
</div>
<div className='background-home'>
<img src="https://media.istockphoto.com/photos/black-man-waves-to-his-colleague-on-a-video-call-from-his-office-picture-id1398260676?b=1&k=20&m=1398260676&s=170667a&w=0&h=G8isxg9KH9xitxRQWb3_F-tvJwSZYsXoPVlSWehy-EM=" class="rounded float-left" alt="..."/>
<h1 className='background-text'>Welcome to Job Search!!</h1>
<h2 className='background-text-1'>The brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to show us how badly we want something</h2>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<img src="https://media.istockphoto.com/photos/shot-of-a-young-businesswoman-using-a-digital-tablet-while-at-work-picture-id1365606637?b=1&k=20&m=1365606637&s=170667a&w=0&h=6GMVkQV5qWgzazfZ_BnFripa4bpzqbOUmB2EHMDqyAU=" class="rounded float-right" alt="..."/>
<h2 className="background-text-1" >The average person puts only 25% of his energy into his work. The world takes off its hat to those who put in more than 50% of their capacity, and stands on its head for those few and far between souls who devote 100%.</h2>
<img src="https://media.istockphoto.com/photos/shot-of-an-attractive-young-businesswoman-standing-and-looking-while-picture-id1357880802?b=1&k=20&m=1357880802&s=170667a&w=0&h=wyw_zzCGZOk6d0wDZGDpQTkqNUYUJm7QBh-clM4ECnY=" class="rounded " alt="..."/>
</div>
<h2>Browse For Top categories</h2>
<div class="row">
  <div class="col-sm-6 ">
    <div className="card colour card-hover">
      <div class="card-body">
        <h5 class="card-title">Web developer</h5>
        <p class="card-text">Get a kick start to your career with our vacancies.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card colour card-hover">
      <div class="card-body">
        <h5 class="card-title">UI/UX Developer</h5>
        <p class="card-text">Join us to be the gem of your ide.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card colour card-hover">
      <div class="card-body">
        <h5 class="card-title">React Developer</h5>
        <p class="card-text">Join us to be the gem of your ide.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card colour card-hover">
      <div class="card-body">
        <h5 class="card-title">HR Manager</h5>
        <p class="card-text">Join us to be the gem of your ide.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card colour card-style">
      <div class="card-body">
        <h5 class="card-title">Mern Stack Developer</h5>
        <p class="card-text">Join us to be the gem of your ide.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card colour card-style">
      <div class="card-body">
        <h5 class="card-title">Web Designer</h5>
        <p class="card-text">Join us to be the gem of your ide.</p>
        <a href="#" class="btn btn-primary">Apply</a>
      </div>
    </div>
  </div>
</div>
<Footer></Footer>
</div>





  )
  }
export default MainPage