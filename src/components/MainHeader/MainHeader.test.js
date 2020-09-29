import React from "react";
import { create, act } from "react-test-renderer";
import MainHeader from "./MainHeader";
import {ArrowBack} from "@material-ui/icons";


describe("MainHeader component", () => {

    test("it should shows MainHeader component", () => {
        let component;
        act(() => {
            component =
                create(<MainHeader />);
        });
        const instance = component.root;
        expect(instance).not.toBeNull();
    });

    test("it should shows correct title in MainHeader component", () => {
        let component;
        act(() => {
            component =
                create(<MainHeader countryDetails={true}/>);
        });
        const instance = component.root;
        const title = instance.findByType("div");
        expect(title.children[0]).toBe("Country list");
    });

    test("it should shows the back button when countryDetails is true", () => {
        let component;
        act(() => {
            component =
                create(<MainHeader countryDetails={true} setCountryDetails={()=>{}}/>);
        });
        const instance = component.root;
        const button = instance.findByType("button");
        expect(button).not.toBeNull();
    });

    test("it shouldn`t shows the back button when countryDetails false", () => {
        let component;
        act(() => {
            component =
                create(<MainHeader countryDetails={false} setCountryDetails={()=>{}}/>);
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
                create(<MainHeader countryDetails={true} setCountryDetails={()=>{}}/>);
        });
        const instance = component.root;
        const button = instance.findByType("button");
        const arrow =instance.findByType(ArrowBack);
       expect(arrow).not.toBeNull();
    });

    test("it should change countryDetails(props) to false when back button clicked", () => {
        let component;
        let setCountryDetailsSpy = jest.fn();
        act(() => {
            component =
                create(<MainHeader countryDetails={true} setCountryDetails={setCountryDetailsSpy}/>);
        });
        const instance = component.root;
        let button = instance.findByType("button");
        act( () =>
            button.props.onClick()
        );
        expect(setCountryDetailsSpy).toHaveBeenCalledWith(false);

    });
});