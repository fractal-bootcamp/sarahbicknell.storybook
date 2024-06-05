import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TaskList from './TaskList';

const meta = {
  title: "TaskList",
  component: TaskList
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

