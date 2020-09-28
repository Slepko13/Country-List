import React from "react";
import App from './App';

describe("CountryList component", ()=>{
    // const props = {
    //     data : [
    //         {name :"english" },
    //         {name :"french" },
    //     ],
    //     title :"Languages",
    //     position: "left"
    // }
    const component = shallow(<App/>);

    it("should renders properly ", () => {
        expect(component).toMatchSnapshot();
    });

    it("should renders properly ", () => {
        expect(component.find('App')).not.toBeNull();
    });

})