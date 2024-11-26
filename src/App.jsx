import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Courses from './components/Courses'
import Calculation from './components/Calculation'
import Calculate from './components/Calculate'

function App() {

  const [CourseData,setCourseData] = useState([])
  const [SelectData,setSelectData] = useState([])
  const [FinalData,setFinalData] = useState([])
  const [result,setresult] = useState([])
  let sum = 0
  useEffect(()=>{
      fetch('course.json')
      .then(res => res.json())
      .then(data => setCourseData(data))
  },[])

  const SelectedData = (Sdata) =>{
        
      const DataFound = SelectData.find(value => value == Sdata)
      sum = 0
      
      if(DataFound )
      {
        alert('You have already taken the course') 
      }   

      else{

          SelectData.push(Sdata)
        
      
         let rafResult = [];
          SelectData.map(value => rafResult.push(value.credit_hour))

        
           
   sum = rafResult.reduce((prev,curr)=>prev+curr,0)
  

    if(sum<21){
      const rafFinal = [...FinalData,Sdata]
      setFinalData(rafFinal)
      setresult(sum)
     
    }
    else{
      rafResult.pop()
      SelectData.pop()
      sum = rafResult.reduce((prev,curr)=>prev+curr,0);
      setresult(sum)
  
      alert('You cannot take more credit')
     
    }
        
        
     
        
      }
        

  }
 

  return (
    <>
   
    
     <Header></Header>
     <div className='flex w-11/12 m-auto'>

     <div className='w-5/6  flex flex-wrap'>
      <Courses CourseData = {CourseData} SelectedData = {SelectedData} ></Courses>
      </div>
      <div className='w-1/4'>
      <Calculate FinalData={FinalData} result = {result}  ></Calculate>
      
     </div>

     </div>

    
    </>
  )
}

export default App
