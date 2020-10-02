import React from "react";
import './Loader.scss';
import spinner from '../../assets/images/spin.png';


const Loader = () => {
    return (
        <div className="Loader">
            <div>Loading data, please wait....
            </div>
          <div>
              <img src={spinner} alt="spinner"/>
          </div>
        </div>
    )
}
export default Loader;
