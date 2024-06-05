import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Post from './Post';

const meta = {
  title: "Post",
  component: Post
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
