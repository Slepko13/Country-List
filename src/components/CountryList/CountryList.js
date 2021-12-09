import React from 'react';
import './CountryList.scss';

import { useQuery } from '@apollo/client';
import { COUNTRIES } from "./query";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

function CountryList({ setId }) {
    const { loading, error, data } = useQuery(COUNTRIES);


    if (loading) return <div className="CountryList"><Loader /></div>;
    if (error) return <div className="CountryList"><Error /></div>;
    if (!data.countries.length) return <p>Empty data</p>
    const renderList = (list) => (
        <div className="CountryList ">
            <div className="list">
                {list.map(({ name, capital, continent, code }) => {
                    let countryCode = code.toLowerCase();
                    return (
                        <div
                            className="list__item"
                            data-testid={name}
                            key={name}
                            onClick={() => {
                                setId(code)
                            }}
                        >
                            <div className="item__flag">
                                <img className="flag__image" src={`https://flagpedia.net/data/flags/w580/${countryCode}.png`} alt="flag" />
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
                                    capital === "" ?
                                        null :
                                        <div className="info__capital"
                                            data-testid="customCapital"
                                        >
                                            <div className="info__title">Capital:</div>
                                            <div className="info__data">{capital}</div>
                                        </div>
                                }
                                {continent ?
                                    <div className="info__region"
                                        data-testid="subregion"
                                    >
                                        <div className="info__title">Region:</div>
                                        <div className="info__data">{continent.name}</div>
                                    </div> :
                                    null
                                }
                            </div>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    )
    // if(data &&  data.Country)
    return renderList(data.countries);
}

export default CountryList;