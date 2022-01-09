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
            <form onSubmit={addNewProject}>
            <div className="mb-3">
                <label className="form-label">Course</label>
                <input onChange={onChangeCourse} value={course} required type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Project Name</label>
                <input onChange={onChangeProjectName} value={projectName} required type="text" className="form-control" />
            </div>
            <div >
                <label className="form-label">Due Date</label>
                <input onChange={onChangeDueDate} value={dueDate} required type="date" className="form-control"/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
    )
}

export default Add;