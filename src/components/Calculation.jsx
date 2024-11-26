
const Calculation = ({FinalData,result,price,remain}) => {

  

    return (
          <div className="m-auto text-start bg-white rounded-xl   ">
            <div className="ml-8">
           <h1 className="text-2xl font-bold font-sans py-8 text-blue-500">Credit Hour Remaining <span>{remain}</span> hr</h1>
            <hr className="w-11/12"/>

            <h1 className="text-3xl mt-4 font-bold pb-8">Course Name</h1>
            <div className="course-name mb-8">
                <ol className="list-decimal text-2xl ml-6 font-semibold text-slate-400">
                   {
                     FinalData &&  FinalData.map(data=>
                        <li>{data.title}</li>
                        )
                   }
                </ol>
            </div>
            <hr className="w-11/12"/>
            <h1 className="text-2xl font-semibold py-6">Total Credit Hour: <span>{result}</span></h1>
            <hr className="w-11/12"/>
            <h1 className="text-2xl font-semibold py-6">Total Price: <span>{price}</span> USD</h1>
            </div>
           
        </div>
        
      
    );
};

export default Calculation;