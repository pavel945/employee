import React from "react";
import {Link} from "react-router-dom";

const EmployeeTable = (props) => {

    let employeeRows = <tr className="table-danger text-center"><td colSpan={8}>No Employees found.</td></tr>

    if(props.employees.length > 0){

        employeeRows = props.employees.map((employee) => {

            return <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.department.name}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.birthday}</td>
                <td>{employee.salary}</td>
                <td className="text-end">
                    <Link className="btn btn-success btn-sm me-1"
                          to={`/employee/${employee.id}`}>View</Link>
                    <button className="btn btn-danger btn-sm"
                            onClick={() => props.deleteEmployee(employee.id)}>Delete
                    </button>
                </td>
            </tr>
        });
    }

    return(
        <table className="table table-striped table-hover table-bordered mb-0">
            <thead>
            <tr>
                <th>Id</th>
                <th>Department</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birthday</th>
                <th>Salary</th>
                <th className="text-end">Actions</th>
            </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    );
}

export default EmployeeTable;