import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: "Primary",
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    size: 'small',
    label: 'Button',
  },
};

export const Large: Story = {
  name: 'Large Secondary',
  args: {
    primary: false,
    size: 'large',
    label: 'Button',
  },
};

export const customized: Story = {
  name: "Customized Css",
  args: {
    primary: false,
    size: 'large',
    label: 'Button',
    className: 'border-0'
  },
  tags: ['hello world']
}