import React from "react";
import './MyError.scss';


const MyError = ({message}) => {
    return (
        <div className="MyError">
            Sorry,  you got an error: {message || "some error"}
        </div>
    )
}
export default MyError;
