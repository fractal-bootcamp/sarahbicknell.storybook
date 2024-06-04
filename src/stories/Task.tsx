import React from 'react';
import {useState} from 'react';
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
    const[toggle, setToggle] = useState(false)
    const toggleBg = toggle ? 'bg-[#359845]' : 'bg-[#FFFFF]'
    const taskBoxBg = toggle ? 'bg-[#E2FFE5]' : 'bg-[#FFFFF]'

    return (
    <div className="font-light">
        <h1 className="font-sans:inter text-5xl tracking-wider pb-4"> Task</h1>
        <div> 
            <div className={`w-[462px] ${taskBoxBg} border-solid flex flex-row mb-4 border border-color:grey rounded-lg`}> 
                <div className="flex items-center m-3"> 
                        <button onClick={() => setToggle(!toggle)} className={`shrink-0 border rounded-md border-solid w-[25px] h-[25px] mx-4 font-sans ${toggleBg}`}> </button>
                        <div className='flex flex-col'>
                            <p className="text-lg"> {title}</p>
                            <p className=" text-md w-[375px] text-slate-400 break-words "> {description}</p>
                        </div>
                </div>
            </div> 
        </div>
    </div>
  );
};


