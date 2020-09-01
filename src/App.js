import React from "react";

import ReactImageMagnify from "react-image-magnify";
import InnerImageZoom from "react-inner-image-zoom";

import img352 from "./assets/img352.png";
import img1760 from "./assets/img1760.jpg";

import "./App.css";
import "./innerImageStyles.css";

function App() {
  return (
    <div className="App">
      <div className="mainGrid">
        <div className="imageMagnify" style={{ flexDirection: "column" }}>
          <span className="zoomOptionTitle">Primeiro tipo</span>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Imagem menor",
                isFluidWidth: true,
                src: img352,
              },
              largeImage: {
                src: img1760,
                width: 1200,
                height: 1900,
              },
            }}
          />
        </div>
        <div className="imageZoom">
          <span className="zoomOptionTitle">Segunda tipo</span>
          <InnerImageZoom src={img352} zoomSrc={img1760} />
        </div>
      </div>
    </div>
  );
}

export default App;
