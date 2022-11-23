
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navi from './nav';
import '../../CSS/Profile.css';


// 

// import { useContext, useEffect, useState } from "react";
// import {
//   Button,
//   Grid,
//   Typography,
//   Modal,
//   Paper,
//   makeStyles,
//   TextField,
// } from "@material-ui/core";
// import axios from "axios";
// import ChipInput from "material-ui-chip-input";
// import FileUploadInput from "../lib/FileUploadInput";
// import DescriptionIcon from "@material-ui/icons/Description";
// import FaceIcon from "@material-ui/icons/Face";

// 



// import Message from './Message';
// import Progress from './Progress';
const Profile = () => {
  const [initialName, setInitialName] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [initialPhone, setInitialPhone] = useState(0);
  const [company, setCompany] = useState('');
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [initialEducation, setInitialEducation] = useState([]);
  const [initialSkill, setInitialSkill] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [hideSkill, setHideSkill] = useState(false);
  const [hideEducation, setuHideEducation] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState("");
  const [phone, setPhone] = useState(9);
  const [profile, setProfile] = useState("");
  const [updateUi, setUpdateUi] = useState(Date.now())
  const [initialProfile, setInitialProfile] = useState('');
  const [showUpdate, setShowUpdate] = useState(false);
  // let initialName = '';
  // let initialEmail = '';
  useEffect(() => {
    const userid = localStorage.getItem('userId');
    console.log("userid", userid);
    axios.post('http://localhost:9000/profile', { userid })
      .then((res) => {
        console.log("res from profile = ", res.data);
        setInitialName(res.data.name)
        setInitialEmail(res.data.email)
        // setInitialSkill(res.data.skills)
        // setName(res.data.name);
        // setEmail(res.data.email)
      })
      .catch((err) => {
        console.log("err from profile", err);
      })
    axios.get(`http://localhost:9000/profile/${userid}`)
      .then((res) => {
        // console.log("res from get",res);
        let data = res.data.data[0];
        // setInitialName(data.name);
        setInitialProfile(data.profile);
        setInitialPhone(data.phone);
        setInitialSkill(data.skills);
        setInitialEducation(data.education);
        setInitialPhone(data.phone);
        console.log("data", data);
      })
      .catch((err) => {
        console.log("err profile", err);
        // axios.post('http://localhost:9000/profile',{userid})
        // .then((res)=>{
        //     console.log("res from profile = ",res.data);
        //     setInitialName(res.data.name)
        //     setInitialEmail(res.data.email)
        //     // setName(res.data.name);
        //     // setEmail(res.data.email)
        // })
        // .catch((err)=>{
        //     console.log("err from profile",err);
        // })
      })
  }, [updateUi])

  const handleChange = (e, key) => {
    if (key === 'name') {
      console.log("name", name);
      setName(e.target.value)
    }
    if (key === 'email') {
      setEmail(e.target.value)
    }
    if (key === 'phone') {
      setPhone(e.target.value)
    }
    if (key === 'resume') {
      setResume(e.target.value)
    } if (key === 'profile') {
      setProfile(e.target.value)
    }
  }
  const profileUpload = event => {
    console.log(event.target.files[0]);
    setProfile(event.target.files[0]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone);
    // var form = document.querySelector('form')
    let data = new FormData();
    console.log("empty data", data);
    data.append("id", localStorage.getItem('userId'));
    data.append("name", initialName);
    data.append("phone", initialPhone);
    data.append("resume", resume);
    data.append("profile", profile);
    data.append('skills', initialSkill);
    data.append('education', initialEducation);
    console.log("skill at submit", initialSkill);
    console.log("education ======= ", initialEducation);
    // console.log("data = ",name,phone,initialSkill,initialEducation);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    console.log("submit clicked by", name);
    console.log("data = ", data);
    const user = {
      'id': localStorage.getItem('userId'),
      'name': name,
      'phone': phone,
      'resume': resume,
      'profile': profile,
    }
    let id = localStorage.getItem('userId');
    axios.post('http://localhost:9000/profile/updateEducation', { initialEducation, id })
      .then((res) => {
        console.log("res from update 2");
      })
      .catch((err) => {
        console.log("err from update education");
      })
    // setUpdateUi(Date.now());
    axios.post('http://localhost:9000/profile/update', data, config)
      .then((res) => {
        console.log("data ", res);
        console.log("success");
        // alert('success');
        setUpdateUi(Date.now());
        // localStorage.setItem('token', res.data.token);
        // localStorage.setItem('userId',res.data.userId);
        // localStorage.setItem('name',name)

      })
      .catch((err) => {
        alert('fail')
        console.log("err", err);
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
    console.log("formdata", formData);
    console.log("file", file);
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
  const handleUpdate = (e) => {

    setShowUpdate(true);
  }
  const addSkill = (e) => {
    e.preventDefault();
    // const temp = initialSkill;
    // temp.push('hello');
    // setInitialSkill(temp);
    setInitialSkill(initialSkill => ['', ...initialSkill])
    setHideSkill(false);
  }
  const addEducation = (e) => {
    e.preventDefault();
    setInitialEducation(initialEducation => [{ 'institutionName': 'x', 'startYear': 0, 'endYear': 0 }, ...initialEducation])
    setuHideEducation(false);
    // const temp = initialSkill;
    // temp.push('hello');
    // setInitialSkill(temp);
    // setInitialEducation(initialEducation=>[{'institutionName':'temp','startYear':2000,'endYear':2000},...initialEducation])
  }
  const handleNewSkill = (e) => {
    e.preventDefault();
    setNewSkill(e.target.value);
    console.log("new skill", newSkill);
    // setInitialSkill(initialSkill=>[newSkill,...initialSkill])
  }
  const submitSkill = (e) => {
    e.preventDefault();
    setHideSkill(true);
    let arr = initialSkill.filter(item => item.length > 0);
    setInitialSkill(arr);
    console.log("...", newSkill);
    console.log("......", initialSkill);
    setInitialSkill(initialSkill => [newSkill, ...initialSkill]);
    setNewSkill('');
  }
  const submitEducation = (e) => {
    e.preventDefault();
    setuHideEducation(true);
    let arr = initialEducation.filter(item => item.institutionName != 'x');
    console.log("arr from education", arr);
    console.log("values", company, startYear, endYear);
    setInitialEducation(arr);
    setInitialEducation(initialEducation => [{ 'institutionName': company, 'startYear': startYear, 'endYear': endYear }, ...initialEducation])
    setCompany('');
    setStartYear();
    setEndYear();
  }

  return (
    <div className="back-image" style={{position:"absolute", 
    height:"100%", 
    width:"100%"}}>
      <Navi></Navi>
      <div className="page-content page-container" id="page-content">
        <div className="padding">

          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green  user-profile">
                    <div className=" card-block text-center text-white">
                      <div className="d-grid m-b-25">
                        <img src={initialProfile} className="img-radius profile" alt="User-Profile-Image"></img>
                        <input type="file" className="bg-warning m-auto w-50 form-control" id="customFile" onChange={(e) => profileUpload(e)} />
                      </div>

                      <h6 className="f-w-600">{initialName}</h6>
                      <p>Web Designer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <input style={{ height: '27px' }} value={initialEmail} disabled className=" text-muted f-w-400  border border-dark"></input>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <input style={{ height: '27px' }} onChange={(e) => setInitialPhone(e.target.value)} value={initialPhone} contentEditable={showUpdate} suppressContentEditableWarning={true} className="text-muted f-w-400  border border-info"></input>
                        </div>
                      </div>

                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Skills</h6>
                      <div className="row d-flex justify-content-center">

                        {console.log(initialSkill)}
                        {initialSkill.map((item, index) => (
                          <div className="col-sm-3">
                            {showUpdate & item === '' & !hideSkill ?
                              <div className=''>
                                <input style={{ height: '27px' }} onChange={(e) => handleNewSkill(e)} value={newSkill} className="w-100 border border-warning m-b-10 f-w-600"></input>
                              </div>
                              :
                              <>
                                {item !== '' ?
                                  <p className=" border border-warning m-b-10 f-w-600">{item}</p>
                                  : <></>}
                              </>
                            }
                            {console.log("item skill", item)}
                          </div>
                        ))}
                      </div>
                      {showUpdate ?
                        <div>
                          <button onClick={(e) => addSkill(e)} className='mx-3 p-2 btn btn-primary w-25'>Add Skill</button>
                          <button onClick={(e) => submitSkill(e)} className='mx-3 p-2 btn btn-success w-25'>Submit</button>
                        </div>
                        : <></>}



                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Education</h6>
                      <div className="row d-flex justify-content-center">
                        <div style={{ width: '82%' }} className='m-2 d-flex justify-content-between'>
                          <div>Organization</div>
                          <div style={{ marginRight: "8px" }}>Start Year</div>
                          <div style={{ marginRight: "2px" }} >End Year</div>
                        </div>
                        {console.log(initialEducation)}
                        {initialEducation.map((item, index) => (
                          <div>
                            {showUpdate & !hideEducation & item.institutionName === 'x' ?
                              <div className='bg-info'  >
                                <div className="col-sm-4">

                                  <input value={company} style={{ height: '27px' }} onChange={(e) => setCompany(e.target.value)} className="w-100 border border-info m-b-10 f-w-600"></input>

                                </div>
                                <div className="col-sm-4">
                                  <input value={startYear} style={{ height: '27px' }} onChange={(e) => setStartYear(e.target.value)} className="w-100 border border-info m-b-10 f-w-600"></input>
                                </div>
                                <div className="col-sm-4">
                                  <input value={endYear} style={{ height: '27px' }} onChange={(e) => setEndYear(e.target.value)} className="w-100 border border-info m-b-10 f-w-600"></input>
                                </div>
                              </div>
                              :

                              <div  >
                                {item.institutionName != 'x' ?
                                  <div>
                                    <div className="col-sm-4">

                                      <p suppressContentEditableWarning={true} contentEditable={showUpdate} className="border border-info m-b-10 f-w-600">{item.institutionName}</p>

                                    </div>
                                    <div className="col-sm-4">
                                      <p suppressContentEditableWarning={true} contentEditable={showUpdate} className="border border-info m-b-10 f-w-600">{item.startYear}</p>
                                    </div>
                                    <div className="col-sm-4">
                                      <p suppressContentEditableWarning={true} contentEditable={showUpdate} className="border border-info m-b-10 f-w-600">{item.endYear}</p>
                                    </div>
                                  </div>
                                  : <></>}
                              </div>
                            }
                          </div>
                        ))}
                        {showUpdate ?
                          <div>
                            <button onClick={(e) => addEducation(e)} className='mx-3 p-2 btn btn-primary w-25'>Add New</button>
                            <button onClick={(e) => submitEducation(e)} className='mx-3 p-2 btn btn-success w-25'>Submit</button>
                          </div>
                          : <></>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          showUpdate ?

            <form>
              <button style={{ marginTop: '-40px' }} type="submit" className="mx-2 fs-5 p-4 btn btn-success border border-danger" onClick={(e) => handleSubmit(e)}>Submit</button>
              <button style={{ marginTop: '-40px' }} type="submit" className="mx-2 fs-5 p-4 btn btn-danger border border-warning" onClick={(e) => setShowUpdate(false)}>Cancel</button>
            </form>
            : <div>
              <button type="submit" className="btn btn-primary" onClick={(e) => handleUpdate(e)}>Update</button>
            </div>
        }
      </div>
    </div>

  )
}

export default Profile;