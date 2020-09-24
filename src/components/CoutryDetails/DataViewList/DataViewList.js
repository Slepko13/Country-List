import React from 'react';
import './DataViewList.scss';

import SeeMore from "../SeeMore/SeeMore";


const DataViewList = (props) =>{

    let{title, data, position, addictions, direction} = props;
    let myData, restData;

    if(!data)    return  <div className={position ? `DataViewList + ${position} `: "DataViewList"}>
        <div className="absent">Data is absent today</div>
    </div>;

        if(data.length <= 3 && data.length > 0 ) {
            myData = [...data];
        }else if(data.length > 3) {
            myData = data.slice(0,3);
            restData = data.slice(3);
        }

    return (
        <div className={position ? `DataViewList + ${position} `: "DataViewList"}>
            <div className="info__title">{title}</div>
            <div className="info__content">{
                data.length ?
                    myData.filter(item=>item.name!=="null")
                        .map(item=>
                        <div
                            className="item"
                            key={item.name}
                        >{addictions}
                                <span className="item__symbol">{
                            !item.symbol ? null : item.symbol ==="null" ? "n/a": `"${item.symbol}"`
                                }</span>
                            {item.name.replace("UTC","GMT")}

                        </div>)
                :
                    <div className="item">n/a</div>
                    }
                {restData ?
                    <SeeMore
                        data={restData}
                        bottom=""
                        top="100%"
                        left=""
                        right=""
                    />: null}

            </div>
            {data.length > 3 ?<div style={{height:"20px"}}></div>:null}

        </div>
    )
}

export default DataViewList;