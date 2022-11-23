import axios from 'axios';
// localStorage.setItem('LoggedIn',false);
// var LoggedIn =  localStorage.getItem('LoggedIn');

// console.log("login in authtoken - ",LoggedIn);

const AuthToken = token =>{

    // let LoggedIn = false;
    // console.log("token = ",token);
    if(token){
        console.log("in if of authtoken");
        console.log("token = ",token);
        axios.defaults.headers['authorization'] = token;
        // LoggedIn = true;
        // localStorage.setItem('LoggedIn',true);
        // console.log("in if of auth token");
        
    }else{
        console.log("in else of auth token");
        // const LoggedIn = false;
        delete axios.defaults.headers['authorization']
    }
}
// export const LoggedIn;
// console.log(LoggedIn);
export default AuthToken;
// export {LoggedIn};