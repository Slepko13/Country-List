import React, {useState} from 'react';
import './CountryListMobile.scss';

import { useQuery} from '@apollo/client';
import {COUTRIES} from "./query";
import MyLoader from "../MyLoader/MyLoader";
import MyError from "../MyError/MyError";


function CountryListMobile({setId,countryDetails,setCountryDetails}) {
    const { loading, error, data } = useQuery(COUTRIES);

    if (loading) return <div className="CountryListMobile"><MyLoader/></div>;
    if (error) return <div className="CountryListMobile"><MyError/></div>;

    const renderList = (list) => (
        <div
            className="CountryListMobile "
            style={countryDetails ? { display: "none" } : null}
            onClick={()=>{setCountryDetails(true)}}
        >
            <div className="list">
                {list.map(({name, capital , flag : {svgFile : flag}, subregion }, index ) =>
                    <div
                        className="list__item"
                        key={name}
                        onClick={(e) => { setId(name)}}
                    >
                        <div className="item__flag">
                            <img className="flag__image"  src={flag} alt="flag"/>
                        </div>
                        <div className="item__info">
                            <div className="info__country">
                                <div className="info__title">Country:</div>
                                <div className="info__data">{name}</div>
                            </div>
                            {capital === "Kiev" ?
                                <div className="info__capital">
                                    <div className="info__title">Capital:</div>
                                    <div className="info__data">Kyiv</div>
                                </div>:
                                capital==="" ?
                                    null :
                                    <div className="info__capital">
                                        <div className="info__title">Capital:</div>
                                        <div className="info__data">{capital}</div>
                                    </div>
                            }
                            {subregion ?
                                <div className="info__region">
                                    <div className="info__title">Region:</div>
                                    <div className="info__data">{subregion.region.name}</div>
                                </div> :
                                null
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    return renderList(data.Country);
}

export default CountryListMobile;