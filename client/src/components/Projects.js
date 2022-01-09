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

    const projectComplete = (bool) =>{
        axios.update()
    }


    return(
        <div>
            <div className="container">
                <h1 className="text-center">Your Projects</h1>
                {projects.length > 0 ?
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Course</th>
                                <th>Project Name</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {projects.map((item,i) =>(
                            <tr key={i}>
                                <td>{item.course}</td>
                                <td>{item.projectName}</td>
                                <td>{item.dueDate}</td>
                                <td><button type="button" className="btn btn-secondary ">{item.status ? "completed" : "incomplete"} </button></td>
                                <td><button type="button" className="btn btn-secondary">Update</button></td>
                                <td><button type="button" className="btn btn-secondary" onClick={() => deleteProject(item._id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                :
                <p className="text-center">There are no projects</p>}
            </div>
        </div>
    )
}

export default Projects;