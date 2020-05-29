import React from "react";
import { Route } from "react-router-dom";
// import { isAuthenticated } from "./index";
import UserNav from "../components/elements/usernav/UserNav";
// import AdminNav from "../components/elements/adminnav/AdminNav";

const PublicRoute = ({ component: Component, ...rest }) => (
    <>
    <UserNav/>
    <Route
        {...rest}
        render={props =>
                <Component {...props} />   
        }
    />
    </>
);

export default PublicRoute;

// isAuthenticated() && isAuthenticated().user.role == 1 ? () : (
//     <Redirect
//                     to={{
//                         pathname: "/signin",
//                         state: { from: props.location }
//                     }}
//                 />
//                 )