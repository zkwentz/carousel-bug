import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import Component from './Component';
import './App.css';
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  return (
    <div className="App">
      <Carousel>
        {['a','b','c'].map((property, index) => {
          return <Component property={property} key={index} />;
        })}
      </Carousel>
    </div>
  );
}

export default App;
