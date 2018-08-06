import React, { Component } from 'react';
import './App.css';
import ColorList from './components/ColorList';

const colors = 'https://raw.githubusercontent.com/Adalab/dorcas-repaso-sprint2/master/data/palettes.json';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        colors: []
      }
  }
  componentDidMount() {
    fetch(colors)
      .then(res=>res.json())
      .then(data=>{
        const customColors = data.palettes;
        this.setState({
          colors: customColors
        })
      });
  }
  render() {
    return (
      <div className="space-colors">
        <ColorList colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
