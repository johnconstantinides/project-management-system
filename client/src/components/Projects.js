import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Update from "./Update";

function Projects(){

    const[projects, setProject] = useState([])
    const[update,setUpdate] = useState(false);
    const[updatedProject,setUpdatedProject] = useState("")

    const getProjectsData = () => {
        axios.get("https://project-management-list.herokuapp.com/projects")
            .then(response => {
                setProject(response.data)
            })
    }
    useEffect(() => {
        getProjectsData();
    },[projects]);

    const deleteProject = (id) =>{
        axios.delete("https://project-management-list.herokuapp.com/projects/delete/" + id)
    }

    const projectComplete = (id,course,projectName,dueDate,finished) =>{
        axios.post("https://project-management-list.herokuapp.com/projects/update/" + id,
        {
            course,
            projectName,
            dueDate,
            finished

        })
    }

    const updatePro = (updatingProject) =>{
        setUpdate(true)
        setUpdatedProject(updatingProject)
    }


    return(
        <div>
            <div className="container">
                <h1 className="text-center">Your Projects</h1>
                {projects.length > 0 ?
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <table className="table table-striped table-layout:fixed">
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
                        {Object.keys(projects).map((item,i) =>(
                            <tr key={i}>
                                <td>{projects[item].course}</td>
                                <td>{projects[item].projectName}</td>
                                <td>{projects[item].dueDate}</td>
                                
                                <td> {projects[item].finished ? 
                                <button type="button" className="btn btn-success " onClick={() => projectComplete(projects[item]._id,projects[item].course,projects[item].projectName,projects[item].dueDate,!projects[item].finished)}>Completed</button> :
                                <button type="button" className="btn btn-danger " onClick={() => projectComplete(projects[item]._id,projects[item].course,projects[item].projectName,projects[item].dueDate,!projects[item].finished)}>Incomplete</button>}
                                </td>

                                <td><button type="button" className="btn btn-secondary" onClick={() => updatePro(projects[item])}>Update</button></td>
                                <td><button type="button" className="btn btn-secondary" onClick={() => deleteProject(projects[item]._id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {update ? <Update pro ={updatedProject}/> : false}
                    </div>
                :
                <p className="text-center">There are no projects</p>}
            </div>
        </div>
    )
}

export default Projects;