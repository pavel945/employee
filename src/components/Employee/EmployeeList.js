import React, {useEffect, useState} from "react";
import {deleteEmployee, getEmployees} from "../../services/api/api";
import EmployeeTable from "./EmployeeTable";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const [loadEmployees, setLoadEmployees] = useState(true);

    useEffect(() => {

        if(loadEmployees === true) {

            getEmployees().then((response) => {

                if (response.hasOwnProperty('data')) {

                    setEmployees(response.data);
                    setLoadEmployees(false);
                }
            });
        }
    }, [loadEmployees]);

    const deleteEmployeeHandler = (employeeId) => {

        const confirm = window.confirm('Are you sure you want to delete this employee?');

        if(confirm === true){


            deleteEmployee(employeeId).then((response) => {

                setLoadEmployees(true);
            });
        }
    }

    return (
        <EmployeeTable employees={employees} deleteEmployee={deleteEmployeeHandler}/>
    );
}

export default EmployeeList;