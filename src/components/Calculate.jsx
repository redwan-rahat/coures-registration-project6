import { useEffect, useState } from "react";
import Calculation from "./Calculation";

const Calculate = ({FinalData,result}) => {
  
    

    const [price,setprice] = useState()
    const [remain,setremain] = useState()
  
  
    useEffect(()=>
    {
      
      let rafprice = 0
    FinalData.map(value =>
     rafprice = rafprice + value.price )

     setprice(rafprice)

     setremain(20-result)
    }
    ,[FinalData])



    return (
        <>
      <Calculation   FinalData={FinalData} remain = {remain} result = {result} price={price} ></Calculation>
        
        </>
    );
};

export default Calculate;