import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";



function Add(){

    const[name, setName] = useState("");
    const[projectName,setProjectName] = useState("");
    const[dueDate,setDueDate] = useState("");

    function onChangeName(e){
        setName(e.target.value);
    }
    function onChangeProjectName(e){
        setProjectName(e.target.value)
    }
    function onChangeDueDate(e){
        setDueDate(e.target.value)
    }


    const addNewProject = () => {
        console.log("ok")
        axios.post("http://localhost:5000/projects/add",
        {
            name,
            projectName,
            dueDate
        })

    }

    return(
            <form onSubmit={addNewProject}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input onChange={onChangeName} value={name} required type="text" className="form-control" id="exampleInputEmail1" />
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