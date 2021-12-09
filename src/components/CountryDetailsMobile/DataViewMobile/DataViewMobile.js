import React from 'react';
import PropTypes from "prop-types";

import './DataViewMobile.scss';
import vector from '../../../assets/images/Vector 10.png';

const DataViewMobile = (props) => {
    let { title, data, position, addictions, picture } = props;
    data = data === "" ? "n/a" : data === "Kiev" ? "Kyiv" : data;
    return (
        <div className={position ?
            `DataViewMobile ${position}` :
            "DataViewMobile"}
            data-testid="position"
        >
            <img className="ellipse" src={picture} alt='ellipse' />
            <img className="vector" src={vector} alt='vector' />
            <div className="info__title">
                {title}</div>
            <div className="info__content">
                <span style={{ marginLeft: "10px" }}>{addictions}</span>
                {data}
            </div>
        </div>
    )
}
export default DataViewMobile;

DataViewMobile.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    position: PropTypes.string,
    addictions: PropTypes.string,
    picture: PropTypes.string,
}