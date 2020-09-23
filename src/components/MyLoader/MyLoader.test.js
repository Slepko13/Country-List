import React from "react";
import MyLoader from "./MyLoader";

const setUp = (props) => shallow(<MyLoader {...props}/>)

describe("my MyLoader component", () => {

    it("should render MyLoader Component with props(snapshot)", () => {
        let component = shallow(<MyLoader message="Custom loader"/>);
        expect(component).toMatchSnapshot();
    });

    it("should render MyLoader Component without props(snapshot)", () => {
        let component = shallow(<MyLoader />);
        expect(component).toMatchSnapshot();
    });
});

