import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,NavLink } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
const AdminNav=()=>{
  const navigate=useNavigate()
  const logoutMethod=()=>{
    localStorage.removeItem('accesstoken')
    navigate('/')
 }
  return (
    <div className='navbar-col'>
            <nav class="out navbar navbar-expand-lg">
                <div class="out container-fluid">
                {/* <Link class="navbar-brand top" to='/'><img src='https://cdn.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.webp'></img></Link> */}
                {/* <Link class="navbar-brand top" to='/'> */}
                    <img className='m-auto logo-main logo' src='https://cdn1.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg' alt='jon portal logo'>
                    </img>
                {/* </Link> */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li className="d-flex ">
                        <NavLink to='/admindashboard'>
                            {
                                ({isActive})=>(
                                    <button className={isActive?'btn btn-none border-0 text-primary fw-bold   fs-3':' fs-3 btn btn-none text-dark border-0'}>
                                      Home
                                         </button>
                                )
                            }
                        </NavLink>
                        </li>
                        {/* <li class="nav-item">
                        <Link class="nav-link active" to='/admindashboard'><h4 className='nav-icon mx-3'>Home</h4></Link>
                        </li> */}
                         <li className="d-flex ">
                        <NavLink to='/adminprofile'>
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
                        <Link class="nav-link active" to='/adminprofile'><h4 className='nav-icon mx-3'>Profile</h4></Link>
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
    
  );
}

export default AdminNav;