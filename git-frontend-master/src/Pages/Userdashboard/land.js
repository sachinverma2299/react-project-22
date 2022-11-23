import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Land=(props)=>
{
    const [traverse,settraverse]=useState(props.value)
  const{saving}=useSelector((state)=>state.login)

  useEffect(()=>
  {
    settraverse(props.value)
  },[props.value])
const removefun=(e,itemid)=>
{
    const x=traverse.filter((item)=>item._id!==itemid)
    console.log(x)
    console.log(traverse)
    console.log(saving)
    console.log(itemid)
    settraverse(x)
    const userId = localStorage.getItem('userId');

    axios.post('http://localhost:9000/delete',{itemid,userId}).then((res)=>console.log(res)).catch((e)=>console.log(e))


}

    return(
        <div>
            <div className="row">
        {traverse.map((item)=>
            (
                <div class="col-sm-4 mt-5 carddesign">
                <div class="card-colour background">
                <div class="card-body ">
                  
                <h3 class="card-subtitle mb-2">{item.title}</h3>
                <h4 class="card-subtitle mb-2">Role: {item.jobType}</h4>
                              <p class="card-text">Salary: {item.salary} per month</p>
                              <p class="card-text">Duration: {item.duration} months </p>
                {
                    props.val2==='wishlist'?<div><button className="btn btn-primary" onClick={(e)=>removefun(e,item._id)}>Remove</button></div>:<div></div>
                }
                </div>
                </div>
                </div>
            ))
        }
        </div>
    </div>
    )
}
export default Land