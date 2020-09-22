import React from "react";
import './MyHeader.scss';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {ArrowBack} from "@material-ui/icons";

const MyHeader = ({countryDetails, setCountryDetails}) => {
    return (
        <div className="MyHeader container-fluid" >Country list
            {countryDetails ?
                <button
                    className="back__arrow"
                    onClick={()=>{setCountryDetails(false)}}
                ><ArrowBack/></button>:
            null}
        </div>
    )
}

export default MyHeader;