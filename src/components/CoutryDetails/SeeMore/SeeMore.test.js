import React from "react";
import SeeMore from "./SeeMore";

const setUp = (props) => shallow(<SeeMore{...props}/>)
const props = {
    data:["english", "french", "fg", "lk"],
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
    it("should render SeeMore  list", () => {
        const setList = jest.fn();
        const component = setUp(props);
        expect(component).toMatchSnapshot();
    });

});
