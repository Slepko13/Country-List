import React from "react";
import MyError from "./MyError";

const setUp = (props) => shallow(<MyError {...props}/>)

describe("my MyError component", () => {
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    it("should render MyError Component ", () => {
        const wrapper = component.find(".MyError");
        expect(wrapper.length).toBe(1);
        expect(component).toMatchSnapshot();
    });

    it("should render MyError Component with props(snapshot)", () => {
        let component = shallow(<MyError message="Server error"/>);
        expect(component).toMatchSnapshot();
    });

    it("should render MyError Component without props(snapshot)", () => {
        let component = shallow(<MyError />);
        expect(component).toMatchSnapshot();
    });
});

