import React from 'react';
import './TopBlock.scss';
import earth from "../../assets/images/happy_earth.png";
import PropTypes from "prop-types";


const TopBlock = ({ countryDetails}) => {
  if(!countryDetails)  return (
            <div className="TopBlock " >
                <div className="choose__country">
                    <div className="choose__image">
                        <img className="choose__earth" src={earth}  alt="happy earth"/>
                    </div>
                    <div className="choose__title">Choose a card :)</div>
                </div>
            </div>
            )
        return (
            <div className="TopBlock " >
                <div className="country">
                    <div className="country__flags"></div>
                    <div className="choose__image">
                        <img className="choose__earth " src={earth}  alt="happy earth"/>
                    </div>
                </div>
            </div>
        )
}

export default TopBlock;

TopBlock.propTypes ={
   countryDetails: PropTypes.bool
}