import MainLayout from "../layout/MainLayout";
import {Link} from "react-router-dom";
import EmployeeList from "../components/Employee/EmployeeList";

const Employees = () => {

    return(
        <MainLayout>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>Employees</span>
                            <Link className="btn btn-primary btn-sm" to={`/employee/create/`}>Create</Link>
                        </div>
                        <div className="card-body p-0 table-responsive">
                            <EmployeeList/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Employees;