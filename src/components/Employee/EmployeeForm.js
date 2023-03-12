import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {createEmployee, getDepartments, getEmployee, updateEmployee} from "../../services/api/api";

const EmployeeForm = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({});
    const [departments, setDepartments] = useState([]);

    useEffect(() => {

        getDepartments().then((response) => {

            if(response.hasOwnProperty('data')){

                setDepartments(response.data);
            }
        });

        if(id !== undefined){

            getEmployee(id).then((response) => {

                if(response.hasOwnProperty('data')){

                    setEmployee(response.data);
                }
            });
        }

    }, []);

    const submitHandler = (event) => {

        event.preventDefault();

        const apiRequest = id === undefined ? createEmployee(employee) : updateEmployee(employee);

        apiRequest.then((response) => {

            navigate('/employee');
        });
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required
                       defaultValue={employee.name}
                       onChange={(event) => setEmployee((prevState) => ({...prevState, name: event.target.value}))}/>
            </div>
            <div className="mb-3">
                <label htmlFor="departmentId" className="form-label">Department</label>
                <select className="form-select" value={employee.departmentId}  onChange={(event) => setEmployee((prevState) => ({...prevState, departmentId: Number(event.target.value)}))}>
                    <option value="">--- Choose Department ---</option>
                    {
                        departments.map((department) => {
                            return <option key={department.id} value={department.id}>{department.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required
                       defaultValue={employee.email}
                       onChange={(event) => setEmployee((prevState) => ({...prevState, email: event.target.value}))}/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="number" className="form-control" id="phone" required
                       defaultValue={employee.phone}
                       onChange={(event) => setEmployee((prevState) => ({...prevState, phone: event.target.value}))}/>
            </div>
            <div className="mb-3">
                <label htmlFor="birthday" className="form-label">Birthday</label>
                <input type="date" className="form-control" id="birthday" required
                       defaultValue={employee.birthday}
                       onChange={(event) => setEmployee((prevState) => ({...prevState, birthday: event.target.value}))}/>
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="number" className="form-control" id="salary" required
                       defaultValue={employee.salary}
                       onChange={(event) => setEmployee((prevState) => ({...prevState, salary: event.target.value}))}/>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <Link className="btn btn-warning" to={`/employee/`}>Cancel</Link>
            </div>
        </form>
    );
}

export default EmployeeForm;