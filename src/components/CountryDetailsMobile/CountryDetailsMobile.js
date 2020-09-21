import React from "react";
import './CountryDetailsMobile.scss'

import {  useQuery} from '@apollo/client';


import {COUNTRY} from './query';
import DataView from "../CoutryDetails/DataView/DataView";
import DataViewList from "../CoutryDetails/DataViewList/DataViewList";
import DataViewLanguages from "../CoutryDetails/DataViewLanguages/DataViewLanguages";




const CountryDetailsMobile = ({id, countryDetails}) => {
    const { loading, error, data } = useQuery(COUNTRY,{
        variables: {name: id}
    });
    if(!id) return null;
    if (loading) return <div
        className="CountryDetailsMobile "
        style={countryDetails? { transform: "translateX(0)", height: "100%" } : null}
    ><p className="loading">Loading...</p></div>;
    if (error) return <div
        className="CountryDetailsMobile "
        style={countryDetails? { transform: "translateX(0)", height: "100%" } : null}
    ><p className="error">Error :(</p></div>;


    const{
        name,
        population,
        capital,
        flag:{svgFile :flag},
        subregion,
        currencies,
        timezones,
        callingCodes,
        officialLanguages
    } = data.Country[0];

    const region = subregion ? subregion.region.name : "n/a";
    const currency = currencies.length ? currencies : "n/a";
    const callCode = callingCodes.length ? callingCodes : "n/a";
    const officialLanguage = officialLanguages.length ? officialLanguages : "n/a";
    let  popul, unit;

    if (population > 1000000) {
        popul = (Math.round(population/10000)/100).toLocaleString("pl");
        unit = "m";
    } else {
        popul = (Math.round(population/10)/100).toLocaleString("pl");
        unit = "t"
    }

    return (
        <div
            className="CountryDetailsMobile "
            style={!countryDetails? { transform: "translateX(100%)", display: "none"} : null}
        >
            <div className="country">
                <div className="country__block">
                    <div className="item__flag">
                        <img className="flag__image"  src={flag} alt="flag"/>
                    </div>
                    <DataView
                        title="Country"
                        data={name}
                        position=""
                    />
                    <DataView
                        title="Capital"
                        data={capital}
                        position="left"
                    />
                    <DataView
                        title="Region"
                        data={region}
                        position="right"
                    />
                    <DataView
                        title="Population"
                        data={popul}
                        position=""
                        addictions={unit}
                    />
                    <DataViewList
                        title="Time zone"
                        data={timezones}
                        position=""
                        addictions=""
                    />
                    <DataViewList
                        title="Currencies"
                        data={currencies}
                        position="left"
                        addictions=""
                    />
                    <DataViewList
                        title="Calling codes"
                        data={callingCodes}
                        position=""
                        addictions="+"
                    />
                    <DataViewLanguages
                        title="Official languages"
                        data={officialLanguages}
                        direction="row"
                        position=""
                        addictions=""
                    />
                </div>
            </div>
        </div>
    )

}

export default CountryDetailsMobile;