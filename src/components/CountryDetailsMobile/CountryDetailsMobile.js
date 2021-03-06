import React from "react";
import PropTypes from 'prop-types'
import './CountryDetailsMobile.scss'

import {useQuery} from '@apollo/client';

import {COUNTRY} from './query';
import DataViewMobile from "./DataViewMobile/DataViewMobile";
import DataViewLanguagesMobile from "./DataViewLanguagesMobile/DataViewLanguagesMobile";
import DataViewListMobile from "./DataViewListMobile/DataViewListMobile";
import redEllipse from '../../assets/images/Ellipse 9.png';
import greenEllipse from '../../assets/images/Ellipse 10.png'


const CountryDetailsMobile = ({id, countryDetails}) => {
    const {loading, error, data} = useQuery(COUNTRY, {
        variables: {name: id}
    });
    if (!id) return null;
    if (loading) return <div
        className="CountryDetailsMobile "
    ><p className="loading">Loading...</p></div>;
    if (error) return <div
        className="CountryDetailsMobile "
    ><p className="error">Error :(</p></div>;

    const {
        name,
        population,
        capital,
        flag: {svgFile: flag},
        subregion,
        currencies,
        timezones,
        callingCodes,
        officialLanguages
    } = data.Country[0];

    const region = subregion ? subregion.region.name : "n/a";
    let popul, unit;

    if (population > 1000000) {
        popul = (Math.round(population / 10000) / 100).toLocaleString("pl");
        unit = "m";
    } else {
        popul = (Math.round(population / 10) / 100).toLocaleString("pl");
        unit = "t"
    }

    return (
        <div
            className="CountryDetailsMobile "
            style={!countryDetails ? {
                display: "none"
            } : null}
            data-testid="CountryDetailsMobile"
        >
            <div className="country">
                <div className="country__block"
                     data-testid="country"
                >
                    <div className="item__flag">
                        <img className="flag__image" src={flag} alt="flag"/>
                    </div>
                    <DataViewMobile
                        title="Country"
                        data={name}
                        position=""
                        picture={redEllipse}
                    />

                    <DataViewMobile
                        title="Capital"
                        data={capital}
                        position="left"
                        picture={greenEllipse}

                    />
                    <div className="info two"
                         data-testid="data">
                        <DataViewMobile
                            title="Region"
                            data={region}
                            position="right"
                            picture={redEllipse}
                        />
                    </div>
                    <div
                        data-testid="unit"
                        className="info three">
                        <DataViewMobile
                            title="Population"
                            data={popul}
                            position=""
                            addictions={unit}
                            picture={greenEllipse}
                        />
                    </div>
                    <DataViewListMobile
                        title="Currencies"
                        data={currencies}
                        position="left"
                        addictions=""
                        background="#FFE4A4"
                        picture={redEllipse}
                    />
                    <DataViewLanguagesMobile
                        title="Official languages"
                        data={officialLanguages}
                        direction="row"
                        position=""
                        background="#FBD3C0"
                        picture={greenEllipse}
                    />

                    <DataViewListMobile
                        title="Time zone"
                        data={timezones}
                        position=""
                        addictions=""
                        background="#B9EAC3"
                        picture={redEllipse}
                    />
                    <DataViewListMobile
                        title="Calling codes"
                        data={callingCodes}
                        position=""
                        addictions="+"
                        background="#A6E6FD"
                        picture={greenEllipse}
                        vectorHeight="0"
                    />
                </div>
            </div>
        </div>
    )
}

export default CountryDetailsMobile;
CountryDetailsMobile.propTypes = {
    id: PropTypes.string,
    countryDetails: PropTypes.bool
}