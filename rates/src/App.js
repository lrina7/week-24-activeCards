import React, { useState } from "react";
import './App.css';
import Rate from "./Rate/Rate";
import rates from "./constants/rates";

function App() {

  const [selectedRate, setSelectedRate] = useState(null);

  const handleRateClick = (index) => {
    setSelectedRate(index);
  };

  const ratesComponents = rates.map((rate, index)=>{
    return  <Rate
                key={index} 
                name={rate.name}
                price={rate.price} 
                speed={rate.speed}
                volume={rate.volume} 
                chosen={selectedRate === index}
                onClick={() => handleRateClick(index)}
           />
  });

  return (<div className="allCards">
    {ratesComponents}
  </div>
  );
}

export default App;



















