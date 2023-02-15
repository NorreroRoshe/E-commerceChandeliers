import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 6, max: 16 },
    };
  }

  render() {
    return (
      <InputRange
        maxValue={72}
        minValue={1}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  }
}
export default App;


// import React from 'react';
// import ReactSlider from 'react-slider';


// const App = () => {
  
//   const [min, setmin] = React.useState(0);
//   const [max, setmax] = React.useState(500);
  
//   return (
// <div>
//     <div className="values-wrapper">
//     <p className="">
//       Min value:
//       <span>{min}</span>
//     </p>
//     <p className="">
//       Max values:
//       <span>{max}</span>
//     </p>
//   </div>
//     <ReactSlider
//     defaultValue={[min, max]}
//     className="slider"
//     trackClassName="tracker"
//     min={0}
//     max={500}
//     minDistance={50}
//     step={50}
//     withTracks={true}
//     pearLing={true}
//     renderThumb={(props) => {
//       return <div {...props} className="thumb"></div>;
//     }}
//     renderTrack={(props) => {
//       return <div {...props} className="track"></div>;
//     }}
//     onChange={([min, max]) => {
//       setmin(min);
//       setmax(max);
//     }}
//   />
//   </div>
// )}

// export default App;
