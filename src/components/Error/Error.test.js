import React from "react";
import Error from "./Error";

const setUp = (props) => shallow(<Error {...props}/>)

describe("my Error component", () => {
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    it("should render Error Component ", () => {
        const wrapper = component.find(".Error");
        expect(wrapper.length).toBe(1);
        expect(component).toMatchSnapshot();
    });

    it("should render Error Component with props(snapshot)", () => {
        let component = shallow(<Error message="Server error"/>);
        expect(component).toMatchSnapshot();
    });

    it("should render Error Component without props(snapshot)", () => {
        let component = shallow(<Error />);
        expect(component).toMatchSnapshot();
    });
});

