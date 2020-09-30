import React from "react";
import DataViewMobile from "./DataViewMobile";
import {render} from '@testing-library/react';


describe("my DataViewMobile component", () => {


    it("should render DataViewMobile  Component with props(snapshot)", () => {
        let component = shallow(<DataViewMobile title="Capital" data="London" position="" addictions=""/>);
        expect(component).toMatchSnapshot();
    });

    it("should render DataViewMobile  Component without props(snapshot)", () => {
        let component = shallow(<DataViewMobile/>);
        expect(component).toMatchSnapshot();
    });

    it("should render DataViewMobile  additional classname depending on props ", () => {
        const {getByTestId} = render(
            <DataViewMobile position="left"/>
        );
        expect(getByTestId('position')).toHaveClass('left');
    });

    it("should render DataViewMobile without additional classname depending on props ", () => {
        const {container} = render(
            <DataViewMobile position={null}/>
        );
        expect(container.firstChild.classList.contains('left')).toBe(false)
    });


    it("should render correct data when incoming data is empty string", () => {

        let component = shallow(<DataViewMobile title="Capital" data="" position="" addictions=""/>);
        expect(component.find(".info__content").text()).toEqual('n/a');
    });

    it("should render correct data when incoming data is 'Kiev'", () => {

        let component = shallow(<DataViewMobile title="Capital" data="Kiev" position="" addictions=""/>);
        expect(component.find(".info__content").text()).toEqual('Kyiv');
    });

    it("should render correct data with custom incoming data", () => {

        let component = shallow(<DataViewMobile title="Capital" data="Paris" position="" addictions=""/>);
        expect(component.find(".info__content").text()).toEqual('Paris');
    });

});

