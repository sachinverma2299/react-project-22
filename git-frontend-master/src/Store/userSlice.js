import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import {createAsyncThunk,current} from '@reduxjs/toolkit'


// const initialState = [];
// let name,password;
// reducers are pure fn
export const fetchData=createAsyncThunk('/pages/fetchData',async ()=>{
    try{

            const result=await axios.get('http://localhost:9000/dashboard')
            console.log('inside axios')
            console.log(result.data)
            return result.data
        }
    catch(e)
    {
        console.log(e)
    }
})

export const fetchSavedData=createAsyncThunk('/pages/fetchSavedData',async ()=>{
    try{
        const result=await axios.get('http://localhost:9000/user')
        console.log('inside saved')
        console.log(result.data)
        return result.data

    }
    catch(e)
    {
        console.log(e)
    }
})


const userSlice = createSlice({
    name:'login',
    initialState:{
        admin:false,
        status:false,
        name:'User',
        jobdata:[],
        sorted:[],
        user:[],    
        saving:[],
        applied:[]
    },
    reducers:{
        // add(state,action){
        //     console.log("action.payload",action.payload);
        //     // old redux
        //     // return [...state,action.payload]
        //     state.name = action.payload.name
        //     state.password = action.payload.password
        // },
       
        login(state,action){
            console.log("set login lofginslice");
            state.admin = action.payload.admin;
            state.status = action.payload.status;
            state.name = action.payload.name;
            // state.name = action.payload.name;
            // if(action.payload.name==='admin' && action.payload.password==='admin')
            // {
            //     state.status = true;
            //     state.admin = true;
            // }
            // else
            // state.status = true;
        },
        logout(state){
            console.log("logout in loginslice");
            state.status = false;
            state.admin = false;
            state.name = 'User';
        },
        sorting(state,action)
        {
            console.log('hi')
            console.log(current(state))
            console.log(action.payload)
            if(action.payload.data==='fulltime')
            {
                state.sorted=[]
                const x=state.jobdata.filter((item)=>item.jobType.toLowerCase()==='fulltime')
                state.sorted.push(...x)

            }
            else if(action.payload.data==='parttime')
            {
                state.sorted=[]

                const x=state.jobdata.filter((item)=>item.jobType.toLowerCase()==='internship')
                console.log(x)

                state.sorted.push(...x)

            }
            else if(action.payload.data==='wfh')
            {
                state.sorted=[]
                const x=state.jobdata.filter((item)=>item.jobType.toLowerCase()==='workfromhome')  
                state.sorted.push(...x)


            }
            else if(action.payload.data==='duration')
            {
                state.sorted=[]
                // const x=[...state.jobdata].sort((a,b)=>Number(a.duration)-Number(b.duration))
                if(action.payload.test)
                {
                    const x=[...state.jobdata].sort((a,b)=>Number(a.duration)-Number(b.duration))
                    state.sorted.push(...x)
                }
                else
                {
                    const x=[...state.jobdata].sort((a,b)=>Number(b.duration)-Number(a.duration))
                    state.sorted.push(...x)
                }

                

            }
            else if(action.payload.data==='salary')
            {
                console.log(action.payload)
                state.sorted=[]
                // const x=[...state.jobdata].sort((a,b)=>Number(a.duration)-Number(b.duration))
                if(action.payload.test)
                {   console.log('hi')
                    const x=[...state.jobdata].sort((a,b)=>Number(a.salary)-Number(b.salary))
                    state.sorted.push(...x)
                }
                else
                {
                    console.log('helllo')
                    const x=[...state.jobdata].sort((a,b)=>Number(b.salary)-Number(a.salary))
                    state.sorted.push(...x)
                }


            }
            console.log(current(state))
        },
        sortdate:(state,action)=>
        {
            state.sorted=[]
            console.log(action.payload)
            const x=[...state.jobdata].sort((a,b)=>new Date(a.deadline)-new Date(b.deadline))
            state.sorted.push(...x)

        },apply:(state,action)=>
        {
            console.log('hey there')
            state.applied.push(action.payload.data)
            // state.applied=[...state.applied,action.payload.data]
            console.log(current(state.applied))
        },
        listed:(state,action)=>
        {
            // state.list=[]
            console.log('inside list')
            console.log(action.payload)
            state.list=[...action.payload.data]
            console.log(state.list)
        },
        saved:(state,action)=>
        {
            console.log('inside saving')
            console.log(action.payload)

  const a=action.payload.newdb.find((item)=>item._id===action.payload.data)
//   console.log(current(a.saved))
if(a)
{
  const b=a.saved
  let unique=[...new Map(b.map((item)=>[item["_id"],item])).values()]
  state.saving=[]
  state.saving=[...state.saving,...unique]
}


        },
        appliedfun:(state,action)=>
        {
            console.log(action.payload)
            // const a=state.user.find((item)=>item._id===action.payload.data)
            const a=action.payload.newdb.find((item)=>item._id===action.payload.data)
            if(a)
            {
                const b=a.applied
                let unique=[...new Map(b.map((item)=>[item["_id"],item])).values()]
                state.applied=[]
                state.applied=[...state.applied,...unique]

            }

        }

        // remove(state,action){
        //     return state.filter(item=>item.title!==action.payload)
        // }
    },
    extraReducers:
    {
        [fetchData.fulfilled]:(state,action)=>
        {
            console.log("fulfilled",...action.payload)
            state.jobdata=[...state.jobdata,...action.payload]
            console.log(state.jobdata)
            // state.value.loading=false;
            // state.value.userdata=[...state.value.userdata,...action.payload]
            // console.log(state.value.userdata.length)
        },
        [fetchSavedData.fulfilled]:(state,action)=>
        {
            console.log("fulfilled",...action.payload)
            // state.user=[...state.user,...action.payload]
            state.user=[]
            state.user.push(...action.payload)
            // state.user=[...state.user,...action.payload]

            console.log(state.user)
        }
    }
})

export const{login,logout,sorting,sortdate,apply,listed,saved,appliedfun} = userSlice.actions;
export default userSlice.reducer; 