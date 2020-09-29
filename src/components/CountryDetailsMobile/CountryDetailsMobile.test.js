import React from "react";
import { MockedProvider  } from '@apollo/client/testing';
import { act, render,cleanup, screen } from '@testing-library/react';
import { COUNTRY } from './query';
import CountryDetailsMobile from "./CountryDetailsMobile";




const errorMock = [{
    request: {
        query: COUNTRY,
        variables: { name: 'Ukraine' },
    },
    error: new Error('aw shucks'),
}];
const emptyMock = [{
    request: {
        query: COUNTRY,
        variables: { name: 'Ukraine' },
    },
    error: new Error('aw shucks'),
}];
const dataMocks = [
    {
        request: {
            query: COUNTRY,
            variables: {
                name: 'France'
            }
        },
        result: {
            data: {
                Country: [{
                    name: 'France',
                    population: 52000000,
                    capital: 'Paris',
                    officialLanguages: [{
                        name: 'french'
                    }],
                    subregion: {
                        region: {
                            name: 'Europe'
                        }
                    },
                    currencies: [{
                        name: "Euro",
                        symbol: "₴"
                    }],
                    flag: {
                        svgFile: "flag"
                    },
                    callingCodes: [{
                        name: "33"
                    }],
                    timezones: [{
                        name:"UTM+01:00"
                    }]
                }]
            }
        }
    }
];
const dataMocksWithOutId = [
    {
        request: {
            query: COUNTRY,
            variables: {
                name: null
            }
        },
        result: {
            data: {
                // Country: [{
                //     name: 'France',
                //     population: 52000000,
                //     capital: 'Paris',
                //     officialLanguages: {
                //         name: 'french'
                //     },
                //     subregion: {
                //         region: {
                //             name: 'Europe'
                //         }
                //     },
                //     currencies: {
                //         name: "Euro",
                //         symbol: "₴"
                //     },
                //     flag: {
                //         svgFile: "flag"
                //     },
                //     callingCodes: {
                //         name: 33
                //     },
                //     timezones: {
                //         name:"UTM+01:00"
                //     }
                // }]
            }
        }
    }
];
const dataMocksWithPopullationT = [
    {
        request: {
            query: COUNTRY,
            variables: {
                name: 'France'
            }
        },
        result: {
            data: {
                Country: [{
                    name: 'France',
                    population: 520000,
                    capital: 'Paris',
                    officialLanguages: [{
                        name: 'french'
                    }],
                    subregion: {
                        region: {
                            name: 'Europe'
                        }
                    },
                    currencies: [{
                        name: "Euro",
                        symbol: "₴"
                    }],
                    flag: {
                        svgFile: "flag"
                    },
                    callingCodes: [{
                        name: "33"
                    }],
                    timezones: [{
                        name:"UTM+01:00"
                    }]
                }]
            }
        }
    }
];
const dataMocksWithSubregionNull = [
    {
        request: {
            query: COUNTRY,
            variables: {
                name: 'France'
            }
        },
        result: {
            data: {
                Country: [{
                    name: 'France',
                    population: 52000000,
                    capital: 'Paris',
                    officialLanguages: [{
                        name: 'french'
                    }],
                    subregion: null,
                    currencies: [{
                        name: "Euro",
                        symbol: "₴"
                    }],
                    flag: {
                        svgFile: "flag"
                    },
                    callingCodes: [{
                        name: "33"
                    }],
                    timezones: [{
                        name:"UTM+01:00"
                    }]
                }]
            }
        }
    }
];




async function wait(ms = 0) {
    await act(() => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    });
};
afterEach(cleanup);

describe('CountryDetailsMobile', ()=>{
    it('renders error', async () => {
        const { container } = render(
            <MockedProvider addTypename={false} mocks={errorMock}>
                <CountryDetailsMobile id={"Ukraine"}/>
            </MockedProvider>
        );
        await wait();
        expect(container.textContent).toMatch('Error');
    });
    it('renders without id', async () => {
        const { container } = render(
            <MockedProvider mocks={dataMocksWithOutId} addTypename={false}>
                <CountryDetailsMobile id={null} />
            </MockedProvider>
        );
        // expect(container.textContent).toBe('');
        expect(container).toBeEmpty();

        await wait();
    });

    it('renders with id', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryDetailsMobile id={'France'} />
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("country")).toHaveTextContent("France");
        expect(getByTestId("country")).toHaveTextContent("Paris");
    });

    it('renders with id and population  more that 1 million', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryDetailsMobile id={'France'} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(getByTestId("unit")).toHaveTextContent("m");
    });
    it('renders with id and population  less that 1 million', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksWithPopullationT}>
                <CountryDetailsMobile id={'France'} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(getByTestId("unit")).toHaveTextContent("t");
    });

    it('renders with id and subregion is null ', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksWithSubregionNull}>
                <CountryDetailsMobile id={'France'} />
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("data")).toHaveTextContent("n/a");
    });
    it('visible when  countryDetails is true', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryDetailsMobile id={'France'}  countryDetails={true}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("CountryDetailsMobile")).toBeVisible();
    });

});





