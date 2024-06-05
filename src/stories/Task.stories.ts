import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Task, TaskProps } from './Task';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Task",
  component: Task
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyTasks: TaskProps[] = [
    {
        title:"Sweep the Kitchen",
        description: "Get under the cabinets, do a good job",
        isComplete: false
    },
    {
        title:"Sweep the Kitchen",
        description: "Get under the cabinets, do a good job",
        isComplete: true
    }
]
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Incomplete: Story = {
  args: dummyTasks[0]
};
export const Complete: Story = {
  args: dummyTasks[1]
};
