import React from "react";
import './Error.scss';
import PropTypes from "prop-types";


const Error = ({message}) => {
    return (
        <div className="Error">
            Sorry,  you got an error: {message || "some error"}
        </div>
    )
}
export default Error;
Error.propTypes = {
    message: PropTypes.string
}