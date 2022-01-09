import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function Projects(){

    const[projects, setProject] = useState([])

    const getProjectsData = () => {
        axios.get("http://localhost:5000/projects")
            .then(response => {
                setProject(response.data)
            })
    }
    useEffect(() => {
        getProjectsData();
    },[]);

    const deleteProject = (id) =>{
        axios.delete("http://localhost:5000/projects/delete/" + id)
        window.location = "/"
    }


    return(
        <div>
            <div className="container">
                <h1 className="text-center">Your Projects</h1>
                {projects.length > 0 ?
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Project Name</th>
                                <th>Status</th>
                                <th>Due Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {projects.map((item,i) =>(
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.projectName}</td>
                                <td>{item.status ? "completed" : "Uncompleted"}</td>
                                <td>{item.dueDate}</td>
                                <td><button type="button" className="btn btn-secondary" onClick={() => deleteProject(item._id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                :
                <p className="text-center">There are no projects</p>}
            </div>
        </div>
    )
}

export default Projects;