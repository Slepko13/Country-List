import React from "react";
import DataViewList from "./DataViewList";
import DataView from "../DataView/DataView";


describe("DataViewList component", () => {
    describe("data is null", ()=>{
        const props = {
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewList {...props}/>);
        it("should renders 2 items ", () => {
            expect(component.find('div.item')).toHaveLength(0);
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
        const component = shallow(<DataViewList {...props}/>);
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
        const component = shallow(<DataViewList {...props}/>);

        it("should renders properly ", () => {
            expect(component).toMatchSnapshot();
        });

        it("should renders 3 items and SeeMore ", () => {
            expect(component.find('div.item')).toHaveLength(3);
            expect(component.find('SeeMore')).toHaveLength(1);
        });

        it("should renders symbol ", () => {
            expect(component.find('span.item__symbol')).toHaveLength(3);
        });

    });
});

