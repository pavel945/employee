import Navigation from "./Navigation";
import {Fragment} from "react";

const MainLayout = (props) => {

    return(
        <Fragment>
            <Navigation/>
            <div className="container">
                <div className="main py-2">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default MainLayout;