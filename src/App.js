import React from "react";
//import DisplayGrid from './components/DisplayGrid';
import "./App.css";
import "./resizable/styles.css";
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);


function App() {
  return (
    <div className="App">
      <ResponsiveGridLayout rowHeight={5} width={1000} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
     
          <div key="a" data-grid={{ x: 0, y: 0, w: 3, h: 3 }} className="SecondBlock"> First Block A</div>
          <div key="b" data-grid={{ x: 3, y: 0, w: 3, h: 3 }} className="SecondBlock"> First Block B</div>
          <div key="c" data-grid={{ x: 6, y: 0, w: 3, h: 3 }} className="SecondBlock"> First Block C</div>
          <div key="d" data-grid={{ x: 9, y: 0, w: 3, h: 3 }} className="SecondBlock">First Block D</div>

          <div key="e" data-grid={{ x: 0, y: 0, w: 3, h: 3 }} className="SecondBlock">Secoond Block E</div>
          <div key="f" data-grid={{ x: 3, y: 0, w: 3, h: 3 }} className="SecondBlock">Secoond Block F</div>
          <div key="g" data-grid={{ x: 6, y: 0, w: 3, h: 3 }} className="SecondBlock">Secoond Block G</div>
          <div key="h" data-grid={{ x: 9, y: 0, w: 3, h: 3 }} className="SecondBlock">Secoond Block H</div>

          <div key="i" data-grid={{ x: 0, y: 0, w: 3, h: 3 }} className="SecondBlock">Third Block I</div>
          <div key="j" data-grid={{ x: 3, y: 0, w: 3, h: 3 }} className="SecondBlock">Third Block J</div>
          <div key="k" data-grid={{ x: 6, y: 0, w: 3, h: 3 }} className="SecondBlock">Third Block K</div>
          <div key="l" data-grid={{ x: 9, y: 0, w: 3, h: 3 }} className="SecondBlock">Third Block L</div>
        
      </ResponsiveGridLayout>
    </div>
  );
}
export default App;
