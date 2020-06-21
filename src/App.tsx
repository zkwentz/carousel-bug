import React, { useState } from 'react';
import Carousel from "@brainhubeu/react-carousel";
import Component from './Component';
import './App.css';
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  const [properties] = useState(['a', 'b', 'c']);

  return (
    <div className="App">
      <Carousel centered={true} slidesPerPage={2} dots>
        {properties.map((property) => {
          return <Component property={property} key={0} />;
        })}
      </Carousel>
    </div>
  );
}

export default App;
