import React, {useEffect, useState} from "react";
import {deleteDepartment, getDepartments} from "../../services/api/api";
import DepartmentTable from "./DepartmentTable";

const DepartmentList = () => {

    const [departments, setDepartments] = useState([]);
    const [loadDepartments, setLoadDepartments] = useState(true);

    useEffect(() => {

        if(loadDepartments === true) {

            getDepartments().then((response) => {

                if (response.hasOwnProperty('data')) {

                    setDepartments(response.data);
                    setLoadDepartments(false);
                }
            });
        }
    }, [loadDepartments]);

    const deleteDepartmentHandler = (departmentId) => {

        const confirm = window.confirm('Are you sure you want to delete this department?');

        if(confirm === true){


            deleteDepartment(departmentId).then((response) => {

                setLoadDepartments(true);
            });
        }
    }

    return(
        <DepartmentTable departments={departments} deleteDepartment={deleteDepartmentHandler}/>
    );
}

export default DepartmentList;