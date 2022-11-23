// admin and admin username and pass
// events -> onblur etc
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import AuthToken from '../Components/AuthToken';
import {useDispatch} from 'react-redux';
// import { add } from "../store/nameSlice";
import {login,logout} from '../Store/userSlice';
import { fetchData } from "../Store/userSlice";
import Navbar from "../Components/Navbar";
function LoginPage(){

    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(email&&name&&pass){
            setFlag(true);
        }
    },[email,name,pass])
    console.log("flag",flag);
    const WarningEmail = ()=>{
        console.log("required");
        if(email)
        setCheckEmail("")
        else
        setCheckEmail("Enter valid email address")
    }
    const WarningName = ()=>{
        console.log("required");
        if(name)
        setCheckName('')
        else
        setCheckName("Enter valid Name")
    }
    const WarningPass = ()=>{
        // console.log("required");
        if(pass)
        setCheckPass('');
        else
        setCheckPass("Enter valid Password")
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submit clicked");
      const user = {
        'name':name,
        'email':email,
        'password':pass
    }
      axios.post('http://localhost:9000/login',{user})
      .then(res=>{
          console.log("data ",res.data);
          console.log("success");
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId',res.data.userId);
          localStorage.setItem('name',name)
          AuthToken(res.data.token);
          if(res.data.admin===false)
          {
            navigate('/userdashboard')

          }
          if(res.data.admin===true)
          {
            console.log('inside admin')
            navigate('/admindashboard')
          }
          const data = {
            admin:true,
            status:true,
            name:name
        }
        dispatch(login(data))
      })
      .catch(res=>{
        dispatch(logout())
          console.log("res fail = ",res);
      });
    }
    return(
     <>
      <Navbar></Navbar>


      <div className="register-photo">
<div className="form-container">
<div className="image-holder"></div>
<form method="post">
<h2 className="text-center"><strong>Sign In</strong></h2>
<div className="form-group"><input class="form-control" type="name" name="name" placeholder="Name"
 onBlur={WarningName} onChange={(e)=>setName(e.target.value)}/></div>
 <p className="text-danger">{checkName}</p>


<div className="form-group"><input class="form-control" type="email" name="email" placeholder="Email"onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)}/></div>
<p className="text-danger">{checkEmail}</p>
<div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)} /></div>
<p className="text-danger">{checkPass}</p>
<Link onClick={(e)=>handleSubmit(e)} className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/movies'>Login</Link><a class="already" href="#">Don't have an account?<Link to="/signup">  
SignUp here.</Link> </a>
</form>
</div>
</div> 
   </>  

  )
}
export default LoginPage;