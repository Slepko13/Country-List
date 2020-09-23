import React from "react";
import './MyLoader.scss';


const MyLoader = ({loader}) => {
    return (
        <div className="MyLoader">
          {loader || "  Here will be my loader...."}
        </div>
    )
}
export default MyLoader;
