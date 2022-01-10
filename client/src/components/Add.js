import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";



function Add(){

    const[course, setCourse] = useState("");
    const[projectName,setProjectName] = useState("");
    const[dueDate,setDueDate] = useState("");

    const onChangeCourse = (e) =>{
        setCourse(e.target.value);
    }
    const onChangeProjectName = (e) =>{
        setProjectName(e.target.value)
    }
    const onChangeDueDate = (e) =>{
        setDueDate(e.target.value)
    }


    const addNewProject = () => {
        console.log("ok")
        axios.post("http://localhost:5000/projects/add",
        {
            course,
            projectName,
            dueDate
        })

    }

    return(
        <div className="row h-100 justify-content-center align-items-center">
            <form onSubmit={addNewProject}>
            <div className="mb-3 col-sm-5">
                <input onChange={onChangeCourse} value={course} required placeholder="Course" type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3 col-sm-5">
                <input onChange={onChangeProjectName} value={projectName} placeholder="Project Name" required type="text" className="form-control" />
            </div>
            <div className="mb-2 col-sm-4">
                <label className="form-label">Due Date</label>
                <input onChange={onChangeDueDate} value={dueDate} required type="date" className="form-control"/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
            </div>
    )
}

export default Add;