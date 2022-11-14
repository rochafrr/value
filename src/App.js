import React from "react";
import { useEffect, useState } from "react";



function App() {
  const [totalSupply, setTotalSupply] = useState()
  const [staking, setStaking] = useState()
  
 

  useEffect(() => {
    fetchData1();
    fetchData2();
  

  }, []);

  const fetchData1 = async () => {
    try {
      const data = await fetch("https://fcd.terra.dev/v1/totalsupply/luna");
      const result1 = await data.json();
      setTotalSupply(result1)
      
    } catch (err) {
      console.error(err);
    }
  }


  const fetchData2 = async () => {
    try {
      const data2 = await fetch("https://lcd.terra.dev/cosmos/staking/v1beta1/pool");
      const result2 = await data2.json();
      setStaking((result2.pool.bonded_tokens));
      
    } catch (err) {
      console.error(err);
    }
  }

  function CircSupply(){
    const arr = []
    const result = totalSupply - (staking / 1000000);
    arr.push(result);
    console.log(arr);
    return arr;
  }

  const arr = [totalSupply, staking];

  console.log(arr);

  

  





  return (
    <div className="App">
      {CircSupply()}
    </div>
  );
}

export default App;
