import React from "react";
import './ColorCard.css';

class ColorCard extends React.Component {
  render() {
    return (
      <div className="space-colors__card">
        <h2 className="space-colors__name">{this.props.color.name}</h2>
        <ul className="colors">
          {this.props.color.colors.map((item, index)=>{
            return (
              <li className="color" key={index}>
                <div className="color__item" style={{background:`#${item}`}}></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorCard;