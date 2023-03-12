import React from "react";
import MainLayout from "../layout/MainLayout";
import DepartmentForm from "../components/Department/DepartmentForm";

const Department = () => {

    return(
        <MainLayout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mb-4">
                        <div className="card-header">
                            Department
                        </div>
                        <div className="card-body p-3">
                            <DepartmentForm/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Department;