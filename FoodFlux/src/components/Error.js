import React from "react";
import ReactDOM from "react-dom/client";
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Opps!</h1>
            <h1>something went wrong</h1>
            <h2>{err.status+"+"+err.status.Text}</h2>
        </div>
    )
}
export default Error;