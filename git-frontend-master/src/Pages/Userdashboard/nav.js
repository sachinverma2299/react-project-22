import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './dashboard.css'
import { useNavigate,NavLink } from 'react-router-dom'


const Navi=()=>
{
    const navigate=useNavigate()
    const logoutMethod=()=>{
      
      localStorage.removeItem('token');
          localStorage.removeItem('userId');
          
      navigate('/')
    }
    return(
        <div className='navbar-col'>
            <nav class="out  navbar navbar-expand-lg">
                <div class="out  container-fluid">
                {/* <Link class="navbar-brand top" to='/'><img src='https://cdn.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.webp'></img></Link> */}
                {/* <Link class="navbar-brand top" to='/'> */}
                    <img className='m-auto logo-main logo' src='https://cdn1.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg' alt='jon portal logo'>
                    </img>
                {/* </Link> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li className="d-flex ">
                        <NavLink to='/userdashboard'>
                            {
                                ({isActive})=>(
                                    <button className={isActive?'btn btn-none border-0 text-primary fw-bold   fs-3':' fs-3 btn btn-none text-dark border-0'}>Home
                                         </button>
                                )
                            }
                        </NavLink>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/userdashboard'><h4 className='nav-icon mx-3'>Home</h4></Link>
                        </li> */}
                        <li className="d-flex ">
                        <NavLink to='/application'>
                            {
                                ({isActive})=>(
                                    <button className={isActive?'btn btn-none border-0 text-primary fw-bold   fs-3':' fs-3 btn btn-none text-dark border-0'}>
                                        Applied Jobs
                                         </button>
                                )
                            }
                        </NavLink>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/application'><h4 className='nav-icon mx-3'>Applied Jobs</h4></Link>
                        </li> */}
                        <li className="d-flex ">
                        <NavLink  to='/profile'>
                            {
                                ({isActive})=>(
                                    <button className={isActive?'btn btn-none border-0 text-primary fw-bold   fs-3':' fs-3 btn btn-none text-dark border-0'}>
                                        Profile
                                         </button>
                                )
                            }
                        </NavLink>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/profile'><h4 className='nav-icon mx-3'>Profile</h4></Link>
                        </li> */}
                         <li className="d-flex ">
                        <NavLink  to='/wishlist'>
                            {
                                ({isActive})=>(
                                    <button className={isActive?'btn btn-none border-0 text-primary fw-bold   fs-3':' fs-3 btn btn-none text-dark border-0'}>
                                        Saved Jobs
                                         </button>
                                )
                            }
                        </NavLink>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/wishlist'><h4 className='nav-icon mx-3'>saved Jobs</h4></Link>
                        </li> */}
                        <li className="d-flex ">
                        <NavLink  to='/resume'>
                            {
                                ({isActive})=>(
                                    <button className={isActive?'btn btn-none border-0 text-primary fw-bold   fs-3':' fs-3 btn btn-none text-dark border-0'}>
                                        Upload Resume
                                         </button>
                                )
                            }
                        </NavLink>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/resume'><h4 className='nav-icon mx-3'>Resume Upload</h4></Link>
                        </li> */}
                        <li class="nav-item d-flex">
                        <i className='fa fa-sign-out logout ' style={{textDecoration: 'none', margin:"2rem"}} onClick={logoutMethod}><h4 className='nav-icon text-dark'>Logout</h4></i>
                        </li>
                        
                        <li class="nav-item logout">
                        
                        </li>
                    </ul>
                </div>
                </div>
                </nav>
        </div>
    )
}
export default Navi




// <div class="header-area header-transparrent">
//            <div class="headder-top header-sticky">
//                 <div class="container">
//                     <div class="row align-items-center">
//                         <div class="col-lg-3 col-md-2">
//                             <!-- Logo -->
//                             <div class="logo">
//                                 <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
//                             </div>  
//                         </div>
//                         <div class="col-lg-9 col-md-9">
//                             <div class="menu-wrapper">
//                                 <!-- Main-menu -->
//                                 <div class="main-menu">
//                                     <nav class="d-none d-lg-block">
//                                         <ul id="navigation">
//                                             <li><a href="index.html">Home</a></li>
//                                             <li><a href="job_listing.html">Find a Jobs </a></li>
//                                             <li><a href="about.html">About</a></li>
//                                             <li><a href="#">Page</a>
//                                                 <ul class="submenu">
//                                                     <li><a href="blog.html">Blog</a></li>
//                                                     <li><a href="single-blog.html">Blog Details</a></li>
//                                                     <li><a href="elements.html">Elements</a></li>
//                                                     <li><a href="job_details.html">job Details</a></li>
//                                                 </ul>
//                                             </li>
//                                             <li><a href="contact.html">Contact</a></li>
//                                         </ul>
//                                     </nav>
//                                 </div>          
//                                 <!-- Header-btn -->
//                                 <div class="header-btn d-none f-right d-lg-block">
//                                     <a href="#" class="btn head-btn1">Register</a>
//                                     <a href="#" class="btn head-btn2">Login</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Mobile Menu -->
//                         <div class="col-12">
//                             <div class="mobile_menu d-block d-lg-none"></div>
//                         </div>
//                     </div>
//                 </div>
//            </div>
//        </div>