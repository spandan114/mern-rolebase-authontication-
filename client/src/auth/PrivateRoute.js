import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";
import UserNav from "../components/elements/usernav/UserNav";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <>
    <UserNav/>
    <Route
        {...rest}
        render= {props =>
            isAuthenticated() && isAuthenticated().user.role == 0 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/signin" }}
                />
            )
        }
    />

    </>
);

export default PrivateRoute;


{/* <Route
        {...rest}
        render={props =>
            isAuthenticated()  ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    /> 



 <Route {...rest} render={props => (
            isAuthenticated() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {{...props}} />
        )} />



*/}
