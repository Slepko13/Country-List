import React from "react";
import DataViewListMobile from "./DataViewListMobile";
import {render} from "@testing-library/react";
import DataViewLanguages from "../DataViewLanguagesMobile/DataViewLanguagesMobile";


describe("DataViewListMobile component", () => {
    it("should renders with  additional classname depending on props ", () => {
        const { container, getByTestId } = render(
            <DataViewListMobile position="left" />
        );
        expect(getByTestId('position')).toHaveClass('left');
    });

    it("should render  without additional classname depending on props ", () => {
        const { container, getByTestId } = render(
            <DataViewListMobile position={null} />
        );
        expect(container.firstChild.classList.contains('left')).toBe(false)
    });
    describe("symbol is absent", ()=>{
        const props = {
            data : [
                {name :"english" },
                {name :"french" },
            ],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);
        it("should renders correct symbol text", () => {
            expect(component.find('.info__content').childAt(0).find('.item__symbol').text()).toEqual('');
        });
    });
    describe("symbol is string 'null' ", ()=>{
        const props = {
            data : [
                {name :"english", symbol: "null" },
                {name :"french",  symbol: "null" },
            ],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);
        it("should renders correct symbol text", () => {
            expect(component.find('.info__content').childAt(0).find('.item__symbol').text()).toEqual('n/a');
        });
    });
    describe("symbol renders properly ", ()=>{
        const props = {
            data : [
                {name :"english", symbol: "$" },
                {name :"french",  symbol: "₴" },
            ],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);
        it("should renders correct symbol text", () => {
            expect(component.find('.info__content').childAt(0).find('.item__symbol').text()).toEqual('"$"');
        });
    });

    describe("position is absent", ()=>{
        const props = {
            data : [
                {name :"english" },
                {name :"french" },
            ],
            title :"Languages",
            // position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);
        it("should renders correct className", () => {
         expect(component.find('.DataViewListMobile')).toHaveLength(1);
        });
    });
    describe("data is absent", ()=>{
        const props = {
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);
        it("should renders 'Data is absent today ", () => {
            expect(component.find('.absent').text()).toEqual('Data is absent today');
        });
    });
    describe("data is empty array", ()=>{
        const props = {
            data :[],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);
        it("should renders 'n/a ", () => {
            expect(component.find('.item').text()).toEqual('n/a');
        });
    });
    describe("data length <= 3", ()=>{
        const props = {
            data : [
                {name :"english" },
                {name :"french" },
            ],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);

        it("should renders 2 items ", () => {
            expect(component.find('div.item')).toHaveLength(2);
        });
        it("should renders properly ", () => {
            expect(component).toMatchSnapshot();
        });
    });
    describe(" data length > 3",() => {
        const props = {
            data : [
                {name :"english" , symnol: "e"},
                {name :"french" , symnol: "f"},
                {name :"german", symnol: "g" },
                {name :"polish", symnol: "p" }
            ],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewListMobile {...props}/>);

        it("should renders properly ", () => {
            expect(component).toMatchSnapshot();
        });

        it("should renders 3 items and SeeMore ", () => {
            expect(component.find('div.item')).toHaveLength(3);
            expect(component.find('SeeMore')).toHaveLength(1);
        });
    });
});

