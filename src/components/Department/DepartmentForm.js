import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {createDepartment, getDepartment, updateDepartment} from "../../services/api/api";

const DepartmentForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [department, setDepartment] = useState({});

    useEffect(() => {

        if(id !== undefined){

            getDepartment(id).then((response) => {

                if(response.hasOwnProperty('data')){

                    setDepartment(response.data);
                }
            });
        }

    }, []);

    const submitHandler = (event) => {

        event.preventDefault();

        const apiRequest = id === undefined ? createDepartment(department) : updateDepartment(department);

        apiRequest.then((response) => {

            navigate('/department');
        });
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required
                       defaultValue={department.name}
                       onChange={(event) => setDepartment((prevState) => ({...prevState, name: event.target.value}))}/>
            </div>
            <div className="mb-3">
                <label htmlFor="type" className="form-label">Description</label>
                <textarea type="text" className="form-control" id="description" required
                          defaultValue={department.description}
                          onChange={(event) => setDepartment((prevState) => ({...prevState, description: event.target.value}))}/>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <Link className="btn btn-warning" to={`/department/`}>Cancel</Link>
            </div>
        </form>
    );
}

export default DepartmentForm