import React from "react";
import { MockedProvider  } from '@apollo/client/testing';
import { act, render, screen, fireEvent, cleanup } from '@testing-library/react';

import {COUNTRIES} from "./query";
import CountryListMobile from "./CountryListMobile";



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
            data: { Country: [{ name: 'France', capital: 'Paris',subregion: {region: {name: 'Europe'}}, flag: {svgFile: "flag"}}]}
        }
    }
];
const dataMocksKiev = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: { Country: [{ name: 'Ukraine', capital: 'Kiev',subregion: {region: {name: 'Europe'}}, flag: {svgFile: "flag"}}]}
        }
    }
];
const dataMocksEmptyCapital = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: { Country: [{ name: 'Ukraine', capital: '', subregion: {region: {name: 'Europe'}}, flag: {svgFile: "flag"}}]}
        }
    }
];
const dataMocksEmptySubregion = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: { Country: [{ name: 'France', capital: 'Paris',subregion: null, flag: {svgFile: "flag"}}]}
        }
    }
];
const dataMocksEmpty = [
    {
        request: {
            query: COUNTRIES
        },
        result: {
            data: { Country: []}
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

describe('CountryListMobile', ()=>{
    it('renders', async () => {
        const { asFragment } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryListMobile  setId={()=>{}}/>
            </MockedProvider>
        );
        await wait();
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders error', async ()=>{
        const { container } = render(
            <MockedProvider addTypename={false} mocks={errorMock}>
                <CountryListMobile />
            </MockedProvider>
        );
        await wait();
        expect(container.textContent).toMatch('Sorry,  you got an error: some error');
    });

    it('renders correct texts in card ', async () => {
        const { container, getByTestId, getByText } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryListMobile  setId={()=>{}}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("France")).toHaveTextContent("Europe");
        expect(getByTestId("France")).toHaveTextContent("Paris");
        expect(getByTestId("France")).toHaveClass("list__item");
        expect(container.textContent).toMatch('France');
    });

    it('renders correct texts in card with Kyiv capital', async () => {
        const { container, getByTestId, getByText } = render(
            <MockedProvider addTypename={false} mocks={dataMocksKiev}>
                <CountryListMobile  setId={()=>{}}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId("Ukraine")).toHaveTextContent("Europe");
        expect(getByTestId("Ukraine")).toHaveClass("list__item");
        expect(container.textContent).toMatch('Ukraine');
        expect(container.textContent).toMatch('Kyiv');
    });

    it('renders without capital', async () => {
        const { container, getByTestId, getByText, queryByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksEmptyCapital}>
                <CountryListMobile  setId={()=>{}}/>
            </MockedProvider>
        );
        await wait();
        expect(queryByTestId('customCapital')).toBeFalsy();
        expect(queryByTestId('KyivCapital')).toBeFalsy();
    });

    it('renders without subregion', async () => {
        const { container, getByTestId, getByText, queryByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksEmptySubregion}>
                <CountryListMobile  setId={()=>{}}/>
            </MockedProvider>
        );
        await wait();
        expect(queryByTestId('subregion')).toBeFalsy();
    });

    it('renders without data', async () => {
        const { container, getByTestId, getByText, queryByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocksEmpty}>
                <CountryListMobile  setId={()=>{}}/>
            </MockedProvider>
        );
        await wait();
        expect(getByText('Empty data')).toBeTruthy();
    });

    it('hides when CountryDetails is true', async () => {
        const { container, getByTestId, getByText, queryByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks} >
                <CountryListMobile  setId={()=>{}} countryDetails={true}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId('CountryListMobile')).not.toBeVisible();
    });
    it('renders when CountryDetails is false', async () => {
        const { container, getByTestId, getByText, queryByTestId } = render(
            <MockedProvider addTypename={false} mocks={dataMocks} >
                <CountryListMobile  setId={()=>{}} countryDetails={false}/>
            </MockedProvider>
        );
        await wait();
        expect(getByTestId('CountryListMobile')).toBeVisible();
    });

    it('setId should be called', async () => {
        const setIdSpy = jest.fn();
        const setCountryDetailsSpy = jest.fn();
        const { container, debug, getByTestId, getByText } = render(
            <MockedProvider addTypename={false} mocks={dataMocks}>
                <CountryListMobile  setId={setIdSpy} setCountryDetails={setCountryDetailsSpy}/>
            </MockedProvider>
        );
        await wait();
        fireEvent.click(getByTestId("France"));
        expect(setIdSpy).toHaveBeenCalledWith("France");
        expect(setCountryDetailsSpy).toHaveBeenCalledWith(true);
    });
});