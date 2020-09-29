import React from 'react';
import PropTypes from "prop-types";
import './DataViewLanguagesMobile.scss';

const DataViewLanguagesMobile = (props) => {

    let {title, data, position} = props;

    if (!data) return <div
        className={position ?
            `DataViewLanguagesMobile ${position}` :
            "DataViewLanguagesMobile"}
        data-testid="position">
        <div className="absent">Data is absent today</div>
    </div>;

    return (
        <div
            className={position ?
                `DataViewLanguagesMobile ${position} ` :
                "DataViewLanguagesMobile"}
        >
            <div className="info__title">{title}</div>
            <div className="info__content">{
                data.length ?
                    data.map(item =>
                        <div
                            className="item"
                            key={item.name}
                        >{item.name}</div>) :
                    <div className="item">n/a</div>
            }
            </div>
        </div>
    )
}

export default DataViewLanguagesMobile;

DataViewLanguagesMobile.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    position: PropTypes.string
}