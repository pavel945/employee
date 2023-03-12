import {NavLink} from "react-router-dom";

const Navigation = () => {

    const activeNavLink = (isActive) => {

        let classes = 'nav-link';

        if(isActive === true){

            return `${classes} active`;
        }

        return classes;
    }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PrimeApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/" className={({isActive}) => activeNavLink(isActive)}>Home</NavLink>
                        <NavLink to="/department" className={({isActive}) => activeNavLink(isActive)} >Departments</NavLink>
                        <NavLink to="/employee" className={({isActive}) => activeNavLink(isActive)} >Employees</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;