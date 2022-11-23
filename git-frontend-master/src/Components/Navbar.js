import "../CSS/Navbar.css"
import {Link,NavLink } from "react-router-dom"
function Navbar(){
    return(
        <div className='navbar-col'>
            <nav class="out navbar navbar-expand-lg">
                <div class="out container-fluid">
                {/* <Link class="navbar-brand top" to='/'><img src='https://cdn.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.webp'></img></Link> */}
                {/* <Link class="navbar-brand top" to='/'> */}
                    <img className='m-auto logo logo-main' src='https://cdn1.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg' alt='jon portal logo'>
                    </img>
                {/* </Link> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/userdashboard'><h4 className='nav-icon mx-3'>Home</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/application'><h4 className='nav-icon mx-3'>Contact</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/profile'><h4 className='nav-icon mx-3'>About</h4></Link>
                        </li> */}
                        <li className="d-flex ">
                        <NavLink to='/'>
                            {
                               
                                    <button className='btn btn-none border-0 text-dark fs-3'>Home </button>
                                
                            }
                        </NavLink>
                        </li>
                        <li className="d-flex ">
                        <NavLink to='/'>
                            {
                               
                                    <button className='btn btn-none border-0 text-dark fs-3'>Contact </button>
                                
                            }
                        </NavLink>
                        </li>
                        <li className="d-flex ">
                        <NavLink  to='/'>
                            {
                               
                                    <button className='btn btn-none border-0 text-dark fs-3'>About</button>
                                
                            }
                        </NavLink>
                        </li>
                       
                    </ul>
                    <form class="d-flex">
                        <button className="btn-0"><Link to="/login" className="login-link text-dark text-decoration-none">Login</Link></button>
                        <button className="btn-1"><Link to="/signup"  className="login-link text-dark  text-decoration-none">Register</Link></button>
                        </form>
                </div>
                </div>
                </nav>







{/* 
                  */}
        </div>
    )
}
export default Navbar