import React from 'react';
import './DataViewListMobile.scss';

import PropTypes from "prop-types";


const DataViewListMobile = (props) => {

    let {title, data, position, addictions, background, picture, vectorHeight} = props;

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
            <img className="ellipse" src={picture} alt='ellipse'/>
            <div className="innerVector" style={{height: vectorHeight}}/>
            <div className="info__title">{title}</div>
            <div className="info__content">{
                data.length ?
                    data.filter(item => item.name !== "null")
                        .map(item =>
                            <div
                                className="item"
                                key={item.name}
                                style={{backgroundColor: background}}
                            >{addictions}
                                {item.symbol &&
                                <span className="item__symbol">{
                                    item.symbol === "null" ? "n/a" : `"${item.symbol}"`
                                }</span>
                                }

                                <span> {item.name.replace("UTC", "GMT")}</span>

                            </div>)
                    :
                    <div className="item">n/a</div>
            }
            </div>
            {/*{data.length > 3 ? <div style={{height: "20px"}}/> : null}*/}
        </div>
    )
}

export default DataViewListMobile;

DataViewListMobile.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    position: PropTypes.string,
    addictions: PropTypes.string,
    background: PropTypes.string,
    picture: PropTypes.string,
    vectorHeight: PropTypes.string
}