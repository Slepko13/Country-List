import React from "react";
import SeeMore from "./SeeMore";

const setUp = (props) => shallow(<SeeMore{...props}/>)
const props = {
    data : [
        {name :"english" },
        {name :"french" },
    ],
    left:"0",
    right:"0",
    top:"0",
    bottom:"0"
}

describe("my SeeMore component", () => {
    it("should render SeeMore  Component with props(snapshot)", () => {
        const component = setUp(props);
        expect(component).toMatchSnapshot();
    });
    it("should  show close  button", () => {
        const setList = jest.fn();
        const component = setUp(props);
        component.find(".openButton").simulate('click');
        expect(component.find("closeButton")).not.toBeNull();
    });
    it("should hide close  button", () => {
        const setList = jest.fn();
        const component = setUp(props);
        component.find(".openButton").simulate('click');
        component.find(".closeButton").simulate('click');
        expect(component.find("openButton")).not.toBeNull();
        expect(component.find("closeButton")).toHaveLength(0);

    });
});
