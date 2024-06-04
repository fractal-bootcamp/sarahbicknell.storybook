import React from 'react';
import "../index.css"
const defaultTaskProps = {
    title: 'Sweep the Kitchen',
    description: 'Get under the cabinets, do a good job',
    isComplete: true
}

export type TaskProps = {
    title: string;
    description: string;
    isComplete: boolean;
}
export const Task = ({
    title, 
    description, 
    isComplete
}: TaskProps = defaultTaskProps) => {
  return (
    <div className="font-light">
        <h1 className="font-sans:inter text-5xl tracking-wider pb-4"> Task</h1>
        <div> 
            <p> Incomplete</p>
            <div className="w-[462px] h-[77px] border-solid flex flex-row mb-4 border border-color:grey rounded-lg "> 
                <div className="flex flex-row items-center"> 
                        <button className="border rounded-md border-solid w-[25px] h-[25px] mx-4 font-sans"> </button>
                        <div>
                            <p className="text-lg"> Sweep the Kitchen</p>
                            <p className="text-md text-slate-400"> Get under the cabinets, do a good job</p>
                        </div>
                </div>
            </div> 
            <p> Complete</p>
            <div className="w-[462px] h-[77px] border-solid flex flex-row border border-color:grey bg-[#E2FFE5] rounded-lg "> 
                <div className="flex flex-row items-center"> 
                        <button className="border rounded-md border-solid w-[25px] bg-[#359845] h-[25px] mx-4 font-sans"> </button>
                        <div>
                            <p className="text-lg"> Sweep the Kitchen</p>
                            <p className="text-md text-slate-400"> Get under the cabinets, do a good job</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
};


