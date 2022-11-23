import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import AdminNav from "./AdminNav"
import "../../../CSS/ProfileUser.css"

const AdminProfile = () => {
  const[initialName,setInitialName] = useState('');
  const [initialEmail,setInitialEmail] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [resume,setResume]=useState("");
    const [phone,setPhone] = useState('');
    const [profile ,setProfile]=useState("");
    const[updateUi,setUpdateUi] = useState(Date.now())
    const[initialProfile,setInitialProfile] = useState('');
    const[showUpdate,setShowUpdate] = useState(false);
    // let initialName = '';
    // let initialEmail = '';
    useEffect(()=>{
        const userid = localStorage.getItem('userId');
        console.log("userid",userid);
        axios.get(`http://localhost:9000/profile/${userid}`)
        .then((res)=>{
          // console.log("res from get",res);
          let data = res.data.data[0];
          setInitialName(data.name);
          setInitialProfile(data.profile);
          console.log("data",data);
        })
        .catch((err)=>{
          axios.post('http://localhost:9000/profile',{userid})
          .then((res)=>{
              console.log("res from profile = ",res.data);
              setInitialName(res.data.name)
              setInitialEmail(res.data.email)
              // setName(res.data.name);
              // setEmail(res.data.email)
          })
          .catch((err)=>{
              console.log("err from profile",err);
          })
        })
    },[updateUi])

    const handleChange=(e,key)=>{
        if(key==='name'){
            console.log("name",name);
            setName(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='phone'){
          setPhone(e.target.value)
      }
        if(key==='resume'){
            setResume(e.target.value)
        }if(key==='profile'){
            setProfile(e.target.value)
        }
    }
    const profileUpload = event =>{
      console.log(event.target.files[0]);
      setProfile(event.target.files[0]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,phone);
        // var form = document.querySelector('form')
        let data = new FormData();
        console.log("empty data",data);
        data.append("id",localStorage.getItem('userId'));
        data.append("name",name);
        data.append("phone",phone);
        data.append("resume",resume);
        data.append("profile",profile);
        console.log("data = ",data);
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }
        console.log("submit clicked by",name);
        console.log("data = ",data);
        const user = {
          'id':localStorage.getItem('userId'),
          'name':name,
          'phone':phone,
          'resume':resume,
          'profile':profile,
      }
      // setUpdateUi(Date.now());
         axios.post('http://localhost:9000/profile/update',data,config)
        .then((res)=>{
            console.log("data ",res);
            console.log("success");
            // alert('success');
            setUpdateUi(Date.now());
            // localStorage.setItem('token', res.data.token);
            // localStorage.setItem('userId',res.data.userId);
            // localStorage.setItem('name',name)
            
        }) 
        .catch((err)=>{
          alert('fail')
            console.log("err",err);
        })
        console.log("after post");
          
      }
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChangeResume = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmitResume = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log("formdata",formData);
    console.log("file",file);
    try {
      const res = await axios.post('http://localhost:9000/profile/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
       
      });
      
      

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      
    }
  };
  return (
    <div className='back-image' tyle={{position:"absolute", 
    height:"100%", 
    width:"100%"}}>
        <AdminNav></AdminNav>


<div className='container-profile-image '>
<img src = {initialProfile} alt = "profile" className='thumbnail profile-image'></img>

</div>
<div className='admin-profile-details'>
<h3>Name : {initialName}</h3>
<h4>Email: shruthi@gmail.com</h4>
<h4>Phone-4321568700</h4>
<h4>Currently Working-GlobalLogic</h4>
<h4>Designation-HR</h4>
<h4>Work Location-Bangalore</h4>
</div>
{/* <h3>Email: {initialEmail}</h3> */}
{
    showUpdate?

        <form className='admin-update-form'>
          <h3>Update Form</h3>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=>handleChange(e,'name')}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPhone">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Enter Phone" onChange={(e)=>handleChange(e,'phone')}/>
  </div>
  
<label class="form-label" for="customFile">Upload Profile Picture</label>
<input type="file" class="form-control" id="customFile" onChange={(e)=>profileUpload(e)}/>
{/* {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmitResume}>
      <label class="form-label" for="customFile">Upload Resume</label>
     <input type="file" class="form-control" id="customFile" onChange={onChangeResume}/>
        
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null} */}
  
  <button type="submit" className="m-2 btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
  <button type="submit" className="m-2 btn btn-danger" onClick={(e)=>setShowUpdate(false)}>Cancel</button>
</form>
:<div>
    <button type="submit" class="btn btn-primary" onClick={(e)=>setShowUpdate(true)}>Update</button>
</div>
}



      </div>
 
   
  )
}

export default AdminProfile;