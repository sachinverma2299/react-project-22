import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "./AdminNav";
import Table from 'react-bootstrap/Table'
import * as ReactBootstrap from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './Employee.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
//http://localhost:9000/dashboard
//user: http://localhost:9000/user
const ViewJobPosted = () => {
  const [jobData, setJobData] = useState([])
  useEffect(() => {
    const fetchJobs = async () => {
      const Jobs = await axios.get("http://localhost:9000/dashboard")
      const job = await Jobs.data;
      console.log("Jobs", job)
      setJobData(job)
    }
    fetchJobs();
  }, [])

  // const dispatch = useDispatch();
  // const { data: jobsData, status } = useSelector((state) => state.jobs)
  // useEffect(()=>{
  //   dispatch(fetchJobs());
  // },[])

  const Navigate = useNavigate();
  const handleJobUpdate = (id) => {
    console.log("Inside Update" + " " + id)
    Navigate('/updatejobs', { id })
  }
  const handleJobDelete = (id) => {
    const newData= jobData.filter((item) => item._id !== id)
    setJobData(newData)
  }
  const renderItem = (item, index) => {
    return (
      <Card className="cardstyle bg-dark" key={index} style={{boxShadow: "0 15px 15px 0 black, 0 15px 15px 0 black", color:"white"}}>
        <Card.Header>
          <Card.Title><h4><b>Job Title</b></h4></Card.Title>
          <Card.Subtitle><h5>{item.title}</h5></Card.Subtitle>
        </Card.Header>
        <Card.Body className="bg-dark" style={{padding:"0px"}}>
          <Table striped variant="dark" style={{ margin: "0px" }}>
            <tbody>
              <tr>
                <td><b>Skillsets: </b>{item.skillsets}</td>
              </tr>
              <tr>
                <td><b>Maxposition: </b>{item.maxPositions}</td>
              </tr>
              <tr>
                <td><b>Maxapplicants: </b>{item.maxApplicants}</td>
              </tr>
              <tr>
                <td><b>Salary: </b>{item.salary}</td>
              </tr>
              <tr>
                <td><b>Jobtype: </b>{item.jobType}</td>
              </tr>
              <tr>
                <td><b>Duration(in months): </b>{item.duration}</td>
              </tr>
              <tr>
                <td><b>Deadline: </b>{item.deadline}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Link to={"/updatejobs/" + item._id}>
            <ReactBootstrap.Button className="btn-warning btnstyle1">Update</ReactBootstrap.Button>
          </Link>
          <ReactBootstrap.Button className="btn-danger btnstyle2" onClick={() => { handleJobDelete(item._id) }} style={{ marginLeft: '0.3rem' }}>Delete</ReactBootstrap.Button>
        </Card.Footer>
      </Card>
    )
  }
  // if (status === STATUSES.LOADING){
  //   return <h2>LOADING....</h2>
  // }
  return (
    <div className="back-image" >
      <AdminNav />
      <h1 className='itemsHeader'>My Jobs</h1>
      <Link to='/addjobs'><ReactBootstrap.Button className="btn btn-primary mb-2" size="lg">Add New</ReactBootstrap.Button></Link>
      <Link to='/addjobfile'><ReactBootstrap.Button className="btn btn-primary mb-2" size="lg" style={{marginLeft: "0.5rem"}}>Add File</ReactBootstrap.Button></Link>

      <div className="cardblockstyle">
        {
          jobData.map(renderItem)
        }
      </div>
    </div>
  )
}

export default ViewJobPosted;
