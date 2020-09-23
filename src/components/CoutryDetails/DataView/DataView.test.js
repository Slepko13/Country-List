import React from "react";
import DataView from "./DataView";

const setUp = (props) => shallow(<DataView {...props}/>)

describe("my DataView component", () => {


    it("should render DataView  Component with props(snapshot)", () => {
        let component = shallow(<DataView title="Capital" data="Kiev" position="" addictions=""/>);
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
});

