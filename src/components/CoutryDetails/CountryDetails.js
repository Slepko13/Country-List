import React from 'react';
import PropTypes from "prop-types";

import './CountryDetails.scss';

import { useQuery } from '@apollo/client';
import { COUNTRY } from './query';

import earth from '../../assets/images/happy_earth.png';
import earthFull from '../../assets/images/happy_earth_ellipses.png'

import DataView from "./DataView/DataView";
import DataViewLanguages from "./DataViewLanguages/DataViewLanguages";
import DataViewList from "./DataViewList/DataViewList";
import Loader from "../Loader/Loader";


const CountryDetails = ({ id }) => {

    if (!id) return (
        <div className="CountryDetails ">
            <div className="choose__country">
                <div className="choose__image">
                    <img src={earth} width={266} height={266} alt="happy earth" />
                </div>
                <div className="choose__title">Choose a card :)</div>
            </div>
        </div>
    )
    const { loading, error, data } = useQuery(COUNTRY, {
        variables: { name: id }
    });
    if (loading) return <div className="CountryDetails "><Loader /></div>;
    if (error) return <div className="CountryDetails "><p className="error">Error :(</p></div>;


    let {
        name,
        native: population,
        capital,
        // flag: {svgFile: flag},
        continent,
        currency,
        phone,
        languages
    } = data.country;

    const region = continent ? continent.name : "n/a";
    currency = currency ? currency : "n/a";
    capital = capital ? capital : "n/a";
    const callCode = phone ? phone : "n/a";
    const officialLanguages = languages;
    const timezones = 'n/a'

    let popul, unit;
    let imageUrl = `https://flagpedia.net/data/flags/w580/${id.toLowerCase()}.png`

    // if (population > 1000000) {
    //     popul = (Math.round(population / 10000) / 100).toLocaleString("pl");
    //     unit = "m";
    // } else {
    //     popul = (Math.round(population / 10) / 100).toLocaleString("pl");
    //     unit = "t"
    // }
    return (
        <div className="CountryDetails ">
            <div className="country">
                <div className="country__top">
                    <div className="top__flag" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                </div>
                <div className="country__block"
                    data-testid="country"
                >
                    <img className="block__image" src={earthFull} alt="earth" />
                    <div className="block__info">
                        <div className="info one">
                            <DataView
                                title="Country"
                                data={name}
                                position=""
                                maxWidth="800px"
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
                                title="Native"
                                data={population}
                                position=""
                                addictions={unit}
                            />
                            <DataView
                                title="Time zone"
                                data={timezones}
                                position=""
                                addictions=""
                            />
                        </div>
                        <div className="info four">
                            <DataView
                                title="Currencies"
                                data={currency}
                                position="left"
                                addictions=""
                            />
                            <DataView
                                title="Calling codes"
                                data={phone}
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

CountryDetails.propTypes = {
    id: PropTypes.string
}