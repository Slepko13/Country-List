import React from "react";
import './MainHeader.scss';
import {ArrowBack} from "@material-ui/icons";
import PropTypes from "prop-types";

const MainHeader = ({countryDetails, setCountryDetails}) => {
    return (
        <div className="MainHeader container-fluid" >Country list
            {countryDetails ?
                <button
                    className="back__arrow"
                    onClick={()=>{setCountryDetails(false)}}
                ><ArrowBack/></button>:
            null}
        </div>
    )
}

export default MainHeader;

MainHeader.propTypes = {
    countryDetails: PropTypes.bool,
    setCountryDetails: PropTypes.func
}