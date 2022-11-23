import { useState } from "react"
import axios from"axios"
import "../../CSS/card.css"


const Card=(props)=>
{ 
    console.log(props.value)
    console.log(props.val2)
    const [status, setStatus] = useState(false);

 
 const handleApply  = (itemid) => {
    console.log(status);
    const userId = localStorage.getItem('userId');
    axios.post('http://localhost:9000/apply',{itemid,userId})
    .then(response => {
        console.log(response)
        console.log(response.data);
        setStatus(true)
    }).catch((e)=>console.log(e))
    alert("Job applied Successfully")
    
    axios.post('http://localhost:9000/apply/applicant',{itemid,userId})
    .then((res)=>console.log(res)).catch((e)=>console.log(e))
}
 
    const handlesaved  = (itemid) => {
        console.log(status);
        const userId = localStorage.getItem('userId');
        axios.post('http://localhost:9000/saved',{itemid,userId})
        .then(response => {
            console.log(response)
            console.log(response.data);
            setStatus(true)
        }).catch((e)=>console.log(e))
        alert("Job saved Successfully")

        
    
} 
// const x=new Date(props.value[0].deadline)
// console.log(x)
    return(
        <div>
            {console.log(props.value)}
            <div className="row">
            {props.value.filter((val)=>{
                if(props.val2===undefined)
                    return val
                else if(val.title.toLowerCase().includes(props.val2.toLowerCase()))
                    return val
            }).map((item)=>
                (
                    <div class="col-sm-4 mt-5 carddesign">
                    <div class="card-colour background">
                <div class="card-body ">
                  
                <h3 class="card-subtitle mb-2">{item.title}</h3>
                <h4 class="card-subtitle mb-2">Role: {item.jobType}</h4>
                              <p class="card-text mt-4">Salary: {item.salary} per month</p>
                              <p class="card-text mt-4">Duration: {item.duration} months </p>
                              <p class="card-text mt-4">Deadline:{item.deadline.split('T')[0]}</p>

                    {
                        props.value2==='applied'?<div></div>:<div className="func">
                            <button className="btn btn-primary mx-3 my-3" onClick={()=>handleApply(item._id)}>Apply</button>
                            <button className="btn btn-primary mx-3 my-3 px-3 funcin" onClick={()=>handlesaved(item._id)}>save for later</button>

                        </div>
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
export default Card