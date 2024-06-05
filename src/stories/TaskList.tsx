
import '../index.css'
import {useState} from 'react'

type TaskProps = {
  title: string,
  description: string,
  isComplete: boolean,
  id: number,
  toggleComplete: () => void
}

const initialTaskArray: Omit<TaskProps, 'toggleComplete'>[] = [
  {
      title:"Dishwashing",
      description: "Wash and dry dishes, pots, pans, and utensils",
      isComplete: false,
      id: 1
  },
  {
      title:"Laundry",
      description: "Wash, dry, fold, and put away clothes and linens",
      isComplete: false, 
      id: 2
  },
  {
      title:"Vacuuming",
      description: "Vacuum carpets, rugs, and floors throughout the house",
      isComplete: true, 
      id: 3
  },
  {
      title:"Dusting",
      description: "Dust furniture, shelves, and other surfaces ",
      isComplete: false, 
      id: 4
  }
]

const Task = ({title, description, isComplete, toggleComplete}: TaskProps) => {
  //ok, now toggle is set to isComplete value as its initial value
  const toggleBg = isComplete ? 'bg-[#359845]' : 'bg-[#FFFFFF]'
  const taskBoxBg = isComplete ? 'bg-[#E2FFE5]' : 'bg-[#FFFFFF]'

  return (
    <div className="font-light">
        <div className='flex justify-center'> 
            <div className={`w-[462px] ${taskBoxBg} border-solid flex flex-row mb-4 border border-color:grey rounded-lg`}> 
                <div className="flex items-center m-3"> 
                        <button onClick={toggleComplete} className={`shrink-0   border rounded-md border-solid w-[25px] h-[25px] mx-4 font-sans ${toggleBg}`}> </button>
                        <div className='flex flex-col items-start'>
                            <p className="text-lg "> {title} </p>
                            <p className="text-md flex justify-left text-slate-400"> {description}</p>
                        </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTaskArray)

  const toggleComplete = (id: number) => {
    const newTasks = tasks.map(task => 
      task.id === id ? { ...task, isComplete: !task.isComplete } : task)
    newTasks.sort((a, b) => {
      if (a.isComplete === b.isComplete) {
        return 0;
      } 
        return a.isComplete ? -1 : 1
      })
    setTasks(newTasks)
    }
  
  return (
    <div className='flex flex-col justify-center'> 
      <h1 className="font-sans:inter font-light text-5xl tracking-wider pb-4"> Task</h1>
      {tasks.map((task) => (
        <Task key={task.id} {...task} toggleComplete={() => toggleComplete(task.id)} />
      ))}
    </div>
  )
}

export default TaskList; 

