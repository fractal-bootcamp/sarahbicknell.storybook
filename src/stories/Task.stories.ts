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
        title:"Task 1",
        description: "Do some stuff",
        isComplete: false
    },
    {
        title:"Task 2",
        description: "Do some other stuff",
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
