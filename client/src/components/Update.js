import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";



function Update(props){

    const[course, setCourse] = useState(props.pro.course);
    const[projectName,setProjectName] = useState(props.pro.projectName);
    const[dueDate,setDueDate] = useState(props.pro.dueDate);

    const onChangeCourse = (e) =>{
        setCourse(e.target.value);
    }
    const onChangeProjectName = (e) =>{
        setProjectName(e.target.value)
    }
    const onChangeDueDate = (e) =>{
        setDueDate(e.target.value)
    }


    const updateProject = (id,course,projectName,dueDate,finished) => {
        axios.post("http://localhost:5000/projects/update/" + id,
        {
            course,
            projectName,
            dueDate,
            finished
        })
        window.location = "/"

    }
    const cancelUpdate = () =>{
        window.location = "/"
    }

    return(
            <form onSubmit={() => updateProject(props.pro._id,course,projectName,dueDate,props.pro.finished)} >
            <div className="mb-3">
                <label className="form-label">Course</label>
                <input onChange={onChangeCourse} value={course} required type="text" className="form-control" />
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
            <input type="reset" value="Cancel" className="btn btn-default pull-right" onClick={() => cancelUpdate()}/>
            </form>
    )
}

export default Update;