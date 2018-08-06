import React from "react";
import './ColorList.css';
import ColorCard from './ColorCard';

class ColorList extends React.Component {
  render() {
    return (
      <ul className="space-colors__list">
        {this.props.colors.map((item, index)=>{
          return (
            <li className="space-colors__item" key={index}>
              <ColorCard color={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ColorList;