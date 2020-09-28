import React from "react";
import DataViewLanguages from "./DataViewLanguages";
import DataViewList from "../DataViewList/DataViewList";


describe("my DataViewLanguages component", () => {
    describe("data is empty array", ()=>{
        const props = {
            data :[],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewLanguages {...props}/>);
        it("should renders 'n/a ", () => {
            expect(component.find('.item').text()).toEqual('n/a');
        });
    });
    describe("data is absent", ()=>{
        const props = {
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewLanguages {...props}/>);
        it("should renders 'Data is absent today ", () => {
            expect(component.find('.absent').text()).toEqual('Data is absent today');
        });
    });
    describe("position is absent", ()=>{
        const props = {
            data : [
                {name :"english" },
                {name :"french" },
            ],
            title :"Languages",
        }
        const component = shallow(<DataViewLanguages {...props}/>);
        it("should renders correct className", () => {
            expect(component.find('.DataViewLanguages')).toHaveLength(1);
        });
    });


    //Position check
    // describe("position is 'left'", ()=>{
    //     const props = {
    //         data : [
    //             {name :"english" },
    //             {name :"french" },
    //         ],
    //         title :"Languages",
    //         position: "left"
    //     }
    //     const component = shallow(<DataViewLanguages {...props}/>);
    //     it("should renders correct className", () => {
    //         expect(component.find('.left').exists()).toEqual(true);
    //         expect(component.find('.DataViewLanguages').every('.left')).toEqual(true);
    //     });
    // });
    describe("data length <= 3", ()=>{
        const props = {
            data : [
                {name :"english" },
                {name :"french" },

            ],
            title :"Languages",
            position: "left"
        }
        const component = shallow(<DataViewLanguages {...props}/>);
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

