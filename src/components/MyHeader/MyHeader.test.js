import React, { useState} from "react";
import { create, act } from "react-test-renderer";
import MyHeader from "./MyHeader";
import {ArrowBack} from "@material-ui/icons";


describe("MyHeader component", () => {

    test("it should shows MyHeader component", () => {
        let component;
        act(() => {
            component =
                create(<MyHeader />);
        });
        const instance = component.root;
        expect(instance).not.toBeNull();
    });

    test("it should shows correct title in MyHeader component", () => {
        let component;
        act(() => {
            component =
                create(<MyHeader countryDetails={true}/>);
        });
        const instance = component.root;
        const title = instance.findByType("div");
        expect(title.children[0]).toBe("Country list");
    });

    test("it should shows the back button when countryDetails is true", () => {
        let component;
        act(() => {
            component =
                create(<MyHeader countryDetails={true} setCountryDetails={()=>{}}/>);
        });
        const instance = component.root;
        const button = instance.findByType("button");
        expect(button).not.toBeNull();
    });

    test("it shouldn`t shows the back button when countryDetails false", () => {
        let component;
        act(() => {
            component =
                create(<MyHeader countryDetails={false} setCountryDetails={()=>{}}/>);
        });
        const instance = component.root;

        expect(()=>{
            const button = instance.findByType("button");
        }).toThrow();
    });

    test("it should show correct button ", () => {
        let component;
        act(() => {
            component =
                create(<MyHeader countryDetails={true} setCountryDetails={()=>{}}/>);
        });
        const instance = component.root;
        const button = instance.findByType("button");
        const arrow =instance.findByType(ArrowBack);
        console.log(arrow);
       expect(arrow).not.toBeNull();
    });

    test("it should change countryDetails(props) to false when back button clicked", () => {
        let component;
        let setCountryDetailsSpy = jest.fn();
        act(() => {
            component =
                create(<MyHeader countryDetails={true} setCountryDetails={setCountryDetailsSpy}/>);
        });
        const instance = component.root;
        let button = instance.findByType("button");
        act( () =>
            button.props.onClick()
        );
        expect(setCountryDetailsSpy).toHaveBeenCalledWith(false);

    });
});