// events -> onblur etc
import "../CSS/SignupPage.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
function SignupPage(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [phone,setPhone] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkPhone,setCheckPhone] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    const[admin,setAdmin] = useState(false);
    useEffect(()=>{
        if(email&&name&&pass&&phone){
            setFlag(true);
        }
    })
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
    const WarningPhone = ()=>{
        // console.log("required");
        if(pass)
        setCheckPhone('');
        else
        setCheckPhone("Enter valid Phone")
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submit clicked");
      const user = {
        'name':name,
        'email':email,
        'password':pass,
        "admin":admin
    }
      axios.post('http://localhost:9000/signup',{user})
      .then(res=>{
          // console.log("res ",res);
          console.log("data ",res.data);
          // console.log("msg = ",res.data.msg);
          // setSuccess(true);
          console.log("success");
      })
      .catch(res=>{
          // setSuccess(false);
        // setWrongOtp(true);
        // console.log("res.msg = ",res.data.msg);
        // console.log("res = ",res);
          console.log("res fail = ",res);
      });
    }
    return(
      <>
      <Navbar></Navbar>
        <div class="register-photo">
<div class="form-container">
<div class="image-holder"></div>
<form method="post">
<h2 class="text-center"><strong>Create</strong> an account.</h2>
<div class="form-group"><input class="form-control" type="name" name="name" placeholder="Name"
onBlur={WarningName} onChange={(e)=>setName(e.target.value)}/>
</div>
<p className="text-danger" >{checkName}</p>
<div class="form-group"><input class="form-control" type="phone" name="phone" placeholder="Phone"
onBlur={WarningPhone} onChange={(e)=>setPhone(e.target.value)}></input>
</div>
<p className="text-danger" >{checkPhone}</p>


<div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)}/></div>
<p className="text-danger">{checkEmail}</p>
<div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)} /></div>
<p className="text-danger">{checkPass}</p>
<div className="form-check">
                <input  onChange={(e)=>setAdmin(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label className="form-check-label" for="flexRadioDefault1">
                  Applicant
                </label>
              </div>
              <div className="form-check">
                <input  onChange={(e)=>setAdmin(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                <label className="form-check-label" for="flexRadioDefault2">
                  Recruiter
                </label>
              </div>

<div className="form-group">
<div className="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox"/>I agree to the license terms.</label></div>
</div>
<div className="form-group"><button class="btn btn-success btn-block" type="submit" onClick={(e)=>handleSubmit(e)}>Sign Up</button></div><a class="already" href="#">You already have an account?<Link to="/login">
Login here.</Link> </a>
</form>
</div>
</div>
</> 
        
    )
}
export default SignupPage;