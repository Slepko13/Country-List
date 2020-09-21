import React from 'react';
import './TopBlock.scss';
import earth from "../../assets/images/happy_earth.png";


const TopBlock = ({id}) => {
  if(!id)  return (
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