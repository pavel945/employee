import React from "react";
import MainLayout from "../layout/MainLayout";
import EmployeeForm from "../components/Employee/EmployeeForm";

const Department = () => {

    return(
        <MainLayout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mb-4">
                        <div className="card-header">
                            Employee
                        </div>
                        <div className="card-body p-3">
                            <EmployeeForm/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Department;