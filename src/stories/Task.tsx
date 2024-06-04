import React from 'react';
import "../index.css"

interface TaskProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Task = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: TaskProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
        <h1 className="font-sans:inter text-5xl tracking-wider pb-6"> Task</h1>
        <div> 
            <p> Incomplete</p>
            <div className="w-[426px] h-[77px] border-solid border-2 border-color:grey rounded-lg "> 
                <div> Sweep the Kitchen</div>
            </div> 
            <p> Complete</p>
            <div className="w-[426px] h-[77px] bg-[#E2FFE5] border-solid border-2 border-color:grey rounded-lg"> 
                <div> ExampleTask </div>
            </div>
        </div>

    </div>
  );
};
