import React from 'react';
import './DataViewMobile.scss';
import PropTypes from "prop-types";

const DataViewMobile = (props) => {
    let {title, data, position, addictions} = props;
    data = data === "" ? "n/a" : data === "Kiev" ? "Kyiv" : data;
    return (
        <div className={position ?
            `DataViewMobile ${position}` :
            "DataViewMobile"}
             data-testid="position"
        >
            <div className="info__title">{title}</div>
            <div className="info__content">{data}<span style={{marginLeft: "10px"}}>{addictions}</span></div>
        </div>
    )
}
export default DataViewMobile;

DataViewMobile.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    position: PropTypes.string,
    addictions: PropTypes.string
}