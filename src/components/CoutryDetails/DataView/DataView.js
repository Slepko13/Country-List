import React from 'react';
import './DataView.scss';


const DataView = (props) =>{
    let{title, data, position, addictions} = props;
   data = data ==="" ? "n/a" : data ==="Kiev" ? "Kyiv" : data;
return (
    <div className={position ? `DataView + ${position} `: "DataView"}>
        <div className="info__title">{title}</div>
        <div className="info__content">{data}<span style={{marginLeft: "10px"}}>{addictions}</span></div>
    </div>
)
}

export default DataView;