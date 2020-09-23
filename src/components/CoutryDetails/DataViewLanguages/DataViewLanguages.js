import React from 'react';
import './DataViewLanguages.scss';

import SeeMore from "../SeeMore/SeeMore";


const DataViewLanguages = (props) =>{

    let{title, data, position} = props;
    let myData, restData;

   if(data.length <= 3) {
       myData = [...data];
   }else {
       myData = data.slice(0,3);
       restData = data.slice(3);

   }
    return (
        <div className={position ? `DataViewLanguages + ${position} `: "DataViewLanguages"}>
            <div className="info__title">{title}</div>
            <div className="info__content">{
                myData.length ?
                    myData.map(item=>
                        <div
                            className="item"
                            key={item.name}
                        >{item.name}</div>) :
                    <div>n/a</div>
                }
            {restData ?<div className="wrapper">
                <SeeMore
                    data={restData}
                    bottom="20%"
                    top=""
                    left=""
                    right=""
                /></div>: null}

            </div>
        </div>
    )
}

export default DataViewLanguages;