import React from "react";
import { MockedProvider  } from '@apollo/client/testing';
import { act, render,cleanup, screen } from '@testing-library/react';
import CountryDetails from "./CountryDetails";
import { COUNTRY } from './query';




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

describe('CountryDetails', ()=>{
    it('renders error', async () => {
        const { container } = render(
            <MockedProvider addTypename={false} mocks={errorMock}>
                <CountryDetails id={"Ukraine"}/>
            </MockedProvider>
        );
        await wait();
        expect(container.textContent).toMatch('Error');
    });
    it('renders without id', async () => {
        const { container } = render(
            <MockedProvider mocks={dataMocksWithOutId} addTypename={false}>
                <CountryDetails id={null} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(container.textContent).toMatch('Choose a card');
    });

    it('renders with id', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryDetails id={'France'} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(getByTestId("country")).toHaveTextContent("France");
        expect(getByTestId("country")).toHaveTextContent("Paris");
    });

    it('renders with id and population  more that 1 million', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryDetails id={'France'} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(getByTestId("unit")).toHaveTextContent("m");
    });
    it('renders with id and population  less that 1 million', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksWithPopullationT}>
                <CountryDetails id={'France'} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(getByTestId("unit")).toHaveTextContent("t");
    });

    it('renders with id and subregion is null ', async () => {
        const { container, getByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksWithSubregionNull}>
                <CountryDetails id={'France'} />
            </MockedProvider>
        );
        expect(container.textContent).toBe('Loading...');
        await wait();
        expect(getByTestId("data")).toHaveTextContent("n/a");
    });
});





