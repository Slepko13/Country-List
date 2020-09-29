import React from "react";
import App from './App';

describe("App component", ()=>{

    const component = shallow(<App/>);

    it("should renders properly ", () => {
        expect(component).toMatchSnapshot();
    });

    it("should renders properly ", () => {
        expect(component.find('App')).not.toBeNull();
    });

})