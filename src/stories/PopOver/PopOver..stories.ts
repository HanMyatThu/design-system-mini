import type { Meta, StoryObj } from '@storybook/react';
import { PopOver } from './PopOver';
import '../../tailwind.css';
import { mockButton, mockChildren } from './utils';

const meta = {
  title: 'Components/PopOver',
  component: PopOver,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopOver>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverComponent: Story = {
  name: "PopOver",
  args: {
    isOpen: false,
    onClose: () => {},
    actionElement: mockButton(),
    children: mockChildren(),
    contentClass: "w-100 rounded-10 transition fade-in-20"
  },
};
