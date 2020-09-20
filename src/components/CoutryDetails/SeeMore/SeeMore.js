import React, { useState} from 'react';
import './SeeMore.scss';



const SeeMore = ({data,top, bottom,left,right})=>{
    const [list, setList] = useState(false);
    console.log(list);
return (
    <div
        className="SeeMore"
        style={{bottom,top,right,left}}
    >
        {!list ? <button className="openButton" onClick={()=>setList(true)}>See more</button>:
            data.map(item=>
                <div
                    className="item__see"
                    key={item.name}
                >{item.name.replace("UTC","GMT")}</div>
            )
        }
        {list && <button className="closeButton" onClick={()=>setList(false)}>Close</button>}
    </div>
)
}

export default SeeMore;