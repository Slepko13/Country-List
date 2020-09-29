import React from 'react';
import './DataViewListMobile.scss';

import PropTypes from "prop-types";


const DataViewListMobile = (props) => {

    let {title, data, position, addictions} = props;

    if (!data) return <div
        className={position ?
            `DataViewListMobile ${position} ` :
            "DataViewListMobile"}
        data-testid="position"
    >
        <div className="absent">Data is absent today</div>
    </div>;

    return (
        <div className={position ? `DataViewListMobile  ${position} ` : "DataViewListMobile"}>
            <div className="info__title">{title}</div>
            <div className="info__content">{
                data.length ?
                    data.filter(item => item.name !== "null")
                        .map(item =>
                            <div
                                className="item"
                                key={item.name}
                            >{addictions}
                                <span className="item__symbol">{
                                    !item.symbol ? null : item.symbol === "null" ? "n/a" : `"${item.symbol}"`
                                }</span>
                                {item.name.replace("UTC", "GMT")}

                            </div>)
                    :
                    <div className="item">n/a</div>
            }
            </div>
            {data.length > 3 ? <div style={{height: "20px"}}></div> : null}
        </div>
    )
}

export default DataViewListMobile;

DataViewListMobile.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    position: PropTypes.string,
    addictions: PropTypes.string
}