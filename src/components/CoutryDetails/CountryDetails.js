import React from 'react';
import './CountryDetails.scss';
import DataView from "./DataView/DataView";

import {  useQuery} from '@apollo/client';

import flags from '../../assets/images/flags.png';
import earth from '../../assets/images/happy_earth.png';
import earthFull from '../../assets/images/happy_earth_ellipses.png'

import {COUNTRY} from './query';
import DataViewLanguages from "./DataViewLanguages/DataViewLanguages";
import DataViewList from "./DataViewList/DataViewList";



const CountryDetails = ({id}) => {

    const { loading, error, data } = useQuery(COUNTRY,{
        variables: {name: id}
    });
    if (loading) return <div className="CountryDetails "><p className="loading">Loading...</p></div>;
    if (error) return <div className="CountryDetails "><p className="error">Error :(</p></div>;

    if(!id)  return (
        <div className="CountryDetails " >
          <div className="choose__country">
            <div className="choose__image">
                <img src={earth} width={266} height={266} alt="happy earth"/>
            </div>
              <div className="choose__title">Choose a card :)</div>
          </div>
        </div>
    )

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
// const currency = currencies.length ? currencies : "n/a";
// const callCode = callingCodes.length ? callingCodes : "n/a";
// const officialLanguage = officialLanguages.length ? officialLanguages : "n/a";
let  popul, unit;

if (population > 1000000) {
    popul = (Math.round(population/10000)/100).toLocaleString("pl");
    unit = "m";
} else {
    popul = (Math.round(population/10)/100).toLocaleString("pl");
    unit = "t"
}
    return (
        <div className="CountryDetails ">
            <div className="country">
                <div className="country__top">
                    <div className="top__flag" style={{backgroundImage : `url(${flag})`}}></div>
                </div>
                <div className="country__block"
                     data-testid = "country"
                >
                    <img  className="block__image" src={earthFull} />
                    <div className="block__info">
                        <div className="info one">
                            <DataView
                                title="Country"
                                data={name}
                                position=""
                            />
                        </div>
                        <div className="info two"
                             data-testid="data">
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
                        </div>
                        <div
                            data-testid="unit"
                            className="info three">
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
                            </div>
                        <div className="info four">
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
                        </div>
                        <div className="info five">
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
            </div>
        </div>
    )

}

export default CountryDetails;