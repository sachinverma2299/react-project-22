import React, { useState } from 'react'
import AdminNav from './AdminNav'
import Button from 'react-bootstrap/Button'

import { Form } from 'react-bootstrap'
const UpdateJobs = (props) => {
    const {title, setTitle}=useState()
    const {maxApplicant, setMaxApplicant}=useState()
    const {maxPositions, setMaxPositions}=useState()
    const {deadline, setDeadline}=useState()
    const {skillsets, setSkillsets}=useState()
    const {jobType, setJobType}=useState()
    const {duration, setDuration}=useState()
    const {salary, setSalary}=useState()
    // console.log('location', location)
    console.log(props)
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("dataSubmitted")
    }
    return (
        <div className="back-image" style={{position:"absolute", 
        height:"100%", 
        width:"100%"}}>
            <AdminNav />
            <Form onSubmit={(e)=>handlesubmit(e)} style={{backgroundColor:'wheat', padding:"1rem", margin:"2rem",marginLeft:"40rem", border:"2px solid black", borderRadius:'10px', textAlign: 'left', width:"50rem"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Job Id</Form.Label>
                    <Form.Control placeholder="Job Id" disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Applicant</Form.Label>
                    <Form.Control defaultValue={maxApplicant} onChange={(e)=>{setMaxApplicant(e.target.value)}} placeholder="Enter Max Applicant" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Max Positions</Form.Label>
                    <Form.Control defaultValue={maxPositions} onChange={(e)=>{setMaxPositions(e.target.value)}} placeholder="Enter Max Positions" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control defaultValue={deadline} onChange={(e)=>{setDeadline(e.target.value)}} placeholder="Enter Deadline" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Skill Sets</Form.Label>
                    <Form.Control defaultValue={skillsets} onChange={(e)=>{setSkillsets(e.target.value)}} placeholder="Enter Skill Sets" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control defaultValue={jobType} onChange={(e)=>{setJobType(e.target.value)}} placeholder="Enter Job Type" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control defaultValue={duration} onChange={(e)=>{setDuration(e.target.value)}} placeholder="Enter Duration" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control defaultValue={salary} onChange={(e)=>{setSalary(e.target.value)}} placeholder="Enter Salary" />
                </Form.Group>
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}

export default UpdateJobs