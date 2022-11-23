import React,{ useState, useEffect ,setState } from 'react';
// import logo from './logo.svg';
import { useJwt } from "react-jwt";
import {useDispatch} from 'react-redux';
import {login,logout} from '../store/userSlice'
import AuthToken from './AuthToken';

// import axios from 'axios';
const Verify = () =>{
    // console.log("in verify fn before dispTCH");
    const dispatch = useDispatch();

    // console.log("in verify fn after dispatch");
  var token = localStorage.getItem('token');
  console.log("token in verify",token);
  const {decodedToken , isExpired} = useJwt(token);
  console.log("Verify",decodedToken,isExpired);
  useEffect(()=>{
    console.log("isExpired = ",isExpired);
    AuthToken(token);
    const i = 0;
    if (isExpired === true || token === 'false' || token === null || token==='' ){
        console.log("if of verify");
      localStorage.setItem('LoggedIn',false);
      dispatch(logout())
    }
    else{
        console.log("else of verify",token);
        const data = {
            admin:true,
            status:true,
            name:localStorage.getItem('name')
        }
      
        
        dispatch(login(data))
      localStorage.setItem('LoggedIn',true);
      // console.log("setting logged in = true");
    }
  },[])
}
export default Verify;