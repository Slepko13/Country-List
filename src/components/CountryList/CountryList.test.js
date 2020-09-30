import React from "react";
import {MockedProvider} from '@apollo/client/testing';
import {act, render, fireEvent, cleanup} from '@testing-library/react';

import {COUNTRIES} from "./query";
import CountryList from "./CountryList";


const errorMock = [{
    request: {
        query: COUNTRIES
    },
    error: new Error('aw shucks'),
}];

const dataMocks = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: {
                Country: [{
                    name: 'France',
                    capital: 'Paris',
                    subregion: {region: {name: 'Europe'}},
                    flag: {svgFile: "flag"}
                }]
            }
        }
    }
];
const dataMocksKiev = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: {
                Country: [{
                    name: 'Ukraine',
                    capital: 'Kiev',
                    subregion: {region: {name: 'Europe'}},
                    flag: {svgFile: "flag"}
                }]
            }
        }
    }
];

const dataMocksEmptyCapital = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: {
                Country: [{
                    name: 'Ukraine',
                    capital: '',
                    subregion: {region: {name: 'Europe'}},
                    flag: {svgFile: "flag"}
                }]
            }
        }
    }
];
const dataMocksEmptySubregion = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: {Country: [{name: 'France', capital: 'Paris', subregion: null, flag: {svgFile: "flag"}}]}
        }
    }
];
const dataMocksEmpty = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: {Country: []}
        }
    }
];

async function wait(ms = 0) {
    await act(() => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    });
}

afterEach(cleanup);

describe('CountryList', () => {
    it('renders', async () => {
        const {asFragment} = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryList setId={() => {
                }}/>
            </MockedProvider>
        );
        await wait();
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders error', async () => {
        const {container} = render(
            <MockedProvider addTypename={false} mocks={errorMock}>
                <CountryList/>
            </MockedProvider>
        );

        await wait();

        expect(container.textContent).toMatch('Sorry,  you got an error: some error');
    });

    it('renders correct texts in card ', async () => {
        const {container, getByTestId} = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryList setId={() => {
                }}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("France")).toHaveTextContent("Europe");
        expect(getByTestId("France")).toHaveTextContent("Paris");
        expect(getByTestId("France")).toHaveClass("list__item");
        expect(container.textContent).toMatch('France');
    });

    it('renders correct texts in card with Kyiv capital', async () => {
        const {container, getByTestId} = render(
            <MockedProvider addTypename={false} mocks={dataMocksKiev}>
                <CountryList setId={() => {
                }}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("Ukraine")).toHaveTextContent("Europe");
        expect(getByTestId("Ukraine")).toHaveClass("list__item");
        expect(container.textContent).toMatch('Ukraine');
        expect(container.textContent).toMatch('Kyiv');
    });

    it('renders without capital', async () => {
        const {queryByTestId} = render(
            <MockedProvider addTypename={false} mocks={dataMocksEmptyCapital}>
                <CountryList setId={() => {
                }}/>
            </MockedProvider>
        );
        await wait();
        expect(queryByTestId('customCapital')).toBeFalsy();
        expect(queryByTestId('KyivCapital')).toBeFalsy();
    });

    it('renders without subregion', async () => {
        const {queryByTestId} = render(
            <MockedProvider addTypename={false} mocks={dataMocksEmptySubregion}>
                <CountryList setId={() => {
                }}/>
            </MockedProvider>
        );
        await wait();
        expect(queryByTestId('subregion')).toBeFalsy();
    });

    it('renders without data', async () => {
        const {getByText} = render(
            <MockedProvider addTypename={false} mocks={dataMocksEmpty}>
                <CountryList setId={() => {
                }}/>
            </MockedProvider>
        );
        await wait();
        expect(getByText('Empty data')).toBeTruthy();
    });

    it('setId should be called', async () => {
        const setIdSpy = jest.fn();
        const {getByTestId} = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryList setId={setIdSpy}/>
            </MockedProvider>
        );
        await wait();
        fireEvent.click(getByTestId("France"));
        expect(setIdSpy).toHaveBeenCalledWith("France");
    });
});