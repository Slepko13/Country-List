import React from 'react';
import './CountryListMobile.scss';

import { useQuery } from '@apollo/client';
import { COUNTRIES } from "./query";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";


function CountryListMobile({ setId, countryDetails, setCountryDetails }) {
    const { loading, error, data } = useQuery(COUNTRIES);
    console.log(data);
    if (loading) return <div className="CountryListMobile"><Loader /></div>;
    if (error) return <div className="CountryListMobile"><Error /></div>;
    if (!data.countries.length) return <p>Empty data</p>


    const renderList = (list) => (
        <div
            className="CountryListMobile "
            style={countryDetails ? { display: "none" } : null}
            onClick={() => {
                setCountryDetails(true)
            }}
            data-testid="CountryListMobile"
        >
            <div className="list">
                {list.map(({ name, capital, code, continent }) =>
                    <div
                        className="list__item"
                        data-testid={name}
                        key={name}
                        onClick={() => {
                            setId(code)
                        }}
                    >
                        <div className="item__flag">
                            <img className="flag__image" src={`https://flagpedia.net/data/flags/w580/${code.toLowerCase()}.png`} alt="flag" />
                        </div>
                        <div className="item__info">
                            <div className="info__country">
                                <div className="info__title">Country:</div>
                                <div className="info__data">{name}</div>
                            </div>
                            {capital === "Kiev" ?
                                <div className="info__capital"
                                    data-testid="KyivCapital"
                                >
                                    <div className="info__title">Capital:</div>
                                    <div className="info__data">Kyiv</div>
                                </div> :
                                capital ?
                                    <div className="info__capital"
                                        data-testid="customCapital"
                                    >
                                        <div className="info__title">Capital:</div>
                                        <div className="info__data">{capital}</div>
                                    </div>
                                    : <br />

                            }
                            {continent ?
                                <div className="info__region"
                                    data-testid="subregion"
                                >
                                    <div className="info__title">Continent:</div>
                                    <div className="info__data">{continent.name}</div>
                                </div> :
                                null
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    return renderList(data.countries);
}

export default CountryListMobile;