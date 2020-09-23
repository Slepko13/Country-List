import React from "react";
import DataViewLanguages from "./DataViewLanguages";
import DataViewList from "../DataViewList/DataViewList";


describe("my DataViewLanguages component", () => {
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

    describe("data length > 3", ()=>{
        const props = {
            data : [
                {name :"english" },
                {name :"french" },
                {name :"german" },
                {name :"polish" }
            ] ,
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewLanguages {...props}/>);

        it("should renders properly ", () => {
            expect(component).toMatchSnapshot();
        });

        it("should renders 3 items and SeeMore ", () => {
            expect(component.find('div.item')).toHaveLength(3);
            expect(component.find('SeeMore')).toHaveLength(1);

        });

    });

});

