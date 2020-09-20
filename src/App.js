import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import CountryList from "./components/CountryList/CountryList";
import CountryDetails from "./components/CoutryDetails/CountryDetails";



function App() {
    const [id, setId] = useState(null);

    return (
    <div className="App ">
      <header className="header container-fluid" >Country list</header>
    <div className="content container-fluid border">
     <div className="row ">
        <div className="col-12  col-lg-4">
            <CountryList
                setId={setId}
            />
        </div>
       <div className="col-12 col-lg-8 ">
           <CountryDetails
               id={id}
           />
       </div>
     </div>
    </div>

    </div>
  );
}

export default App;
