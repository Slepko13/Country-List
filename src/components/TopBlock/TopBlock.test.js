import React from "react";
import TopBlock from "./TopBlock";

const setUp = (props) => shallow(<TopBlock {...props}/>)

describe("Top block component", () => {

    it("should render  with   props(snapshot)", () => {
        let component = shallow(<TopBlock id="Custom id"/>);
        expect(component).toMatchSnapshot();
    });

    it("should render without props(snapshot)", () => {
        let component = shallow(<TopBlock />);
        expect(component).toMatchSnapshot();
    });
});

