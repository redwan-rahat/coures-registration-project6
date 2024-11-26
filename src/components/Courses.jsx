import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import Calculation from "./Calculation";
import Calculate from "./Calculate";


const Courses = ({CourseData, SelectedData}) => {

    
   
    
    return (
            
        <>  
        {  
        
        CourseData.map(Cdata=> 
            
            <div key={Cdata.id} className=" mr-4 mb-6 p-4 rounded-xl bg-white">  

            <img className="w-96 h-48 " src={Cdata.image} alt="" />

            <div className="w-96">
                <div className="h-40">
            <h1 className="my-6 w-96 text-2xl font-semibold tracking-tight" >{Cdata.title}</h1>
            <div>
            <p  className="text-lg font-normal text-slate-400" >{Cdata.description}</p>
            </div>
            </div>

            <div className="flex justify-between w-11/12  ">
            <div className="money flex items-center gap-2">
                <p className="text-2xl"><FiDollarSign/></p>
                <h1 className="text-xl font-semibold text-slate-400">Price : <span >{Cdata.price}</span></h1>
            </div>

            <div className="credit">
            <div className="money flex items-center gap-4">
                <p className="text-2xl"><IoBookOutline/></p>
                <h1 className="text-xl font-semibold text-slate-400">Credit : <span >{Cdata.credit_hour}</span>hr</h1>
            </div>
            </div>
            
            </div>
            <div className="w-11/12 m-auto  mt-8">
            <button  onClick={()=>SelectedData(Cdata)} className="w-full bg-blue-500 rounded-xl text-white text-xl font-bold py-3  ">Select</button>
            </div>
            </div>

        </div>

             )
        }
                </>
       
    );
};

export default Courses;