import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import CountryList from "./components/CountryList/CountryList";
import CountryDetails from "./components/CoutryDetails/CountryDetails";
import TopBlock from "./components/TopBlock/TopBlock";
import CountryDetailsMobile from "./components/CountryDetailsMobile/CountryDetailsMobile";
import CountryListMobile from "./components/CountryListMobile/CountryListMobile";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const [id, setId] = useState(null);
    const [countryDetails, setCountryDetails] = useState(false);

    return (
        <div className="App ">
            <MainHeader
                countryDetails={countryDetails}
                setCountryDetails={setCountryDetails}
            />
            <CountryDetailsMobile
                id={id}
                countryDetails={countryDetails}
            />
            <div className="content container-fluid ">
                <div className="row ">
                    <div className="col-12 col-lg-8 order-lg-2 ">
                        <TopBlock
                            id={id}
                            countryDetails={countryDetails}
                        />
                        <CountryDetails
                            id={id}
                        />
                    </div>
                    <div className="col-12  col-lg-4">
                        <CountryList
                            setId={setId}
                        />
                        <CountryListMobile
                            setId={setId}
                            countryDetails={countryDetails}
                            setCountryDetails={setCountryDetails}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
