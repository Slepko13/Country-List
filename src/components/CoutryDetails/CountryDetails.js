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

    if(!id)  return (
        <div className="CountryDetails ">
          <div className="choose__country">
            <div className="choose__image">
                <img src={earth} width={266} height={266} alt="happy earth"/>
            </div>
              <div className="choose__title">Choose a card :)</div>
          </div>

        </div>
    )


    if (loading) return <div className="CountryDetails "><p className="loading">Loading...</p></div>;
    if (error) return <div className="CountryDetails "><p className="error">Error :(</p></div>;


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
        <div className="CountryDetails ">
            <div className="country">
                <div className="country__top">
        {/*<img className="top__flags" src={flags}/>*/}
        {/*<img */}
        {/*    className="top__flag" */}
        {/*    src={flag}*/}
        {/*/>*/}
        <div className="top__flag" style={{backgroundImage : `url(${flag})`}}></div>
    </div>
    <div className="country__block">
        <img  className="block__image" src={earthFull} />
<div className="block__info">
    <div className="info one">
       {/*<div className="info__wrapper">*/}
       {/*    <div className="info__title">Country</div>*/}
       {/*    <div className="info__content">{name}</div>*/}
       {/*</div>*/}
        <DataView
            title="Country"
            data={name}
            position=""
        />
    </div>
    <div className="info two">
        {/*<div className="info__wrapper left">*/}
        {/*    <div className="info__title">Capital</div>*/}
        {/*    <div className="info__content">{*/}
        {/*        capital ==="" ? "n/a" : capital ==="Kiev" ? "Kyiv" : capital*/}
        {/*    }</div>*/}
        {/*</div>*/}
        <DataView
            title="Capital"
            data={capital}
            position="left"
        />
        {/*<div className="info__wrapper right">*/}
        {/*    <div className="info__title">Region</div>*/}
        {/*    <div className="info__content">{region}</div>*/}
        {/*</div>*/}
        <DataView
            title="Region"
            data={region}
            position="right"
        />
    </div>
    <div className="info three">
        {/*<div className="info__wrapper left">*/}
        {/*    <div className="info__title">Population</div>*/}
        {/*    <div className="info__content">{popul} m</div>*/}
        {/*</div>*/}
        <DataView
            title="Population"
            data={popul}
            position=""
            addictions={unit}
        />
        {/*<div className="info__wrapper right">*/}
            {/*<div className="info__title">Time zone</div>*/}
            {/*<div className="info__content">{*/}
            {/*    timezones.length ?*/}
            {/*        timezones.map(item=>*/}
            {/*            <div*/}
            {/*                style={{marginRight : "10px"}}*/}
            {/*                key={item.name}*/}
            {/*            >{item.name.replace("UTC","GMT")}</div>) :*/}
            {/*        <div>n/a</div>*/}

            {/*}</div>*/}
    {/*</div>*/}

    <DataViewList
                title="Time zone"
                data={timezones}
                position=""
                addictions=""
            />
    </div>
    <div className="info four">
        {/*<div className="info__wrapper left">*/}
        {/*    <div className="info__title">Currencies</div>*/}
        {/*    <div className="info__content">{*/}
        {/*        currencies.length ?*/}
        {/*        currencies.map((item)=>*/}
        {/*            <span  key={item.name}>*/}
        {/*                <span style={{marginRight : "10px"}}>"{item.symbol}"</span>*/}
        {/*             <span style={{marginRight : "10px"}} >{item.name}</span>*/}
        {/*            </span>*/}
        {/*           ) :*/}
        {/*            <span>n/a</span>*/}
        {/*    }</div>*/}
        {/*</div>*/}
        <DataViewList
            title="Currencies"
            data={currencies}
            position=""
            addictions=""
        />
        {/*<div className="info__wrapper right">*/}
        {/*    <div className="info__title">Calling codes</div>*/}
        {/*    <div className="info__content">{*/}
        {/*       callingCodes.length ?*/}
        {/*           callingCodes.map(item=>*/}
        {/*               <span style={{marginRight : "10px"}} key={item.name}>+{item.name}</span>) :*/}
        {/*           <span>n/a</span>*/}
        {/*    }</div>*/}
        {/*</div>*/}
        <DataViewList
            title="Calling codes"
            data={callingCodes}
            position=""
            addictions="+"
        />
    </div>
    <div className="info five">
        {/*<div className="info__wrapper">*/}
        {/*    <div className="info__title">Official Languages</div>*/}
        {/*    <div className="info__content">{*/}
        {/*        officialLanguages.length ?*/}
        {/*        officialLanguages.map(item=>*/}
        {/*            <span style={{marginRight : "10px"}} key={item.name}>{item.name}</span>) :*/}
        {/*            <span>n/a</span>*/}
        {/*    }</div>*/}
        {/*</div>*/}
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