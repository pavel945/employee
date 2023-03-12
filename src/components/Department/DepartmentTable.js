import React from "react";
import {Link} from "react-router-dom";

const DepartmentTable = (props) => {

    let departmentRows = <tr className="table-danger text-center"><td colSpan={4}>No Departments found.</td></tr>

    if(props.departments.length > 0){

        departmentRows = props.departments.map((department) => {

            return <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.description}</td>
                <td className="text-end">
                    <Link className="btn btn-success btn-sm me-1"
                          to={`/department/${department.id}`}>View</Link>
                    <button className="btn btn-danger btn-sm"
                            onClick={() => props.deleteDepartment(department.id)}>Delete
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
                <th>Name</th>
                <th>Description</th>
                <th className="text-end">Actions</th>
            </tr>
            </thead>
            <tbody>
                {departmentRows}
            </tbody>
        </table>
    );
}

export default DepartmentTable;