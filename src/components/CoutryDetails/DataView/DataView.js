import React from 'react';
import './DataView.scss';
import PropTypes from "prop-types";

const DataView = (props) => {
    let {title, data, position, addictions} = props;
    data = data === "" ? "n/a" : data === "Kiev" ? "Kyiv" : data;
    return (
        <div className={position ?
            `DataView ${position}` :
            "DataView"}
             data-testid="position"
        >
            <div className="info__title">{title}</div>
            <div className="info__content">{data}<span style={{marginLeft: "10px"}}>{addictions}</span></div>
        </div>
    )
}
export default DataView;

DataView.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    position: PropTypes.string,
    addictions: PropTypes.string
}