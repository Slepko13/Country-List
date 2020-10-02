/* eslint-disable no-undef */
import React from "react";
import Loader from "./Loader";

describe("my Loader component", () => {

    it("should render Loader Component with props(snapshot)", () => {
        let component = shallow(<Loader message="Custom loader"/>);
        expect(component).toMatchSnapshot();
    });

    it("should render Loader Component without props(snapshot)", () => {
        let component = shallow(<Loader/>);
        expect(component).toMatchSnapshot();
    });
});

