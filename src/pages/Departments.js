import MainLayout from "../layout/MainLayout";
import {Link} from "react-router-dom";
import DepartmentList from "../components/Department/DepartmentList";

const Departments = () => {

    return(
        <MainLayout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>Departments</span>
                            <Link className="btn btn-primary btn-sm" to={`/department/create/`}>Create</Link>
                        </div>
                        <div className="card-body p-0 table-responsive">
                            <DepartmentList/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Departments;