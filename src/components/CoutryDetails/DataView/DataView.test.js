import React from "react";
import DataView from "./DataView";

const setUp = (props) => shallow(<DataView {...props}/>)

describe("my DataView component", () => {


    it("should render DataView  Component with props(snapshot)", () => {
        let component = shallow(<DataView title="Capital" data="London" position="" addictions=""/>);
        expect(component).toMatchSnapshot();
    });

    it("should render DataView  Component without props(snapshot)", () => {
        let component = shallow(<DataView />);
        expect(component).toMatchSnapshot();
    });

    it("should render DataView  additional classname depending on props ", () => {
        let component = shallow(<DataView position="left"/>);
        expect(component).toMatchSnapshot();
    });
    describe("DataView component with data checking", () => {

        it("should render correct data when incoming data is empty string", () => {

            let component = shallow(<DataView title="Capital" data="" position="" addictions=""/>);
            expect(component.find(".info__content").text()).toEqual('n/a');
        });

        it("should render correct data when incoming data is 'Kiev'", () => {

            let component = shallow(<DataView title="Capital" data="Kiev" position="" addictions=""/>);
            expect(component.find(".info__content").text()).toEqual('Kyiv');
        });

        it("should render correct data", () => {

            let component = shallow(<DataView title="Capital" data="Paris" position="" addictions=""/>);
            expect(component.find(".info__content").text()).toEqual('Paris');
        });


    });
});

