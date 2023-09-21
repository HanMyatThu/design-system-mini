import type { Meta, StoryObj } from '@storybook/react';
import {Toast} from './Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  name: "Success Toast",
  args: {
    id: 'success-toast',
    title: 'item has been updated successfully',
    variant: 'success',
    position: 'center',
    onClose: () => {}
  },
};

export const Info: Story = {
  name: "Info Toast",
  args: {
    id: 'info-toast',
    title: 'User is logged out successfully',
    variant: 'info',
    position: 'center',
    onClose: () => {}
  },
};

export const Warning: Story = {
  name: "Warning Toast",
  args: {
    id: 'warning-toast',
    title: 'This action is not allowed',
    variant: 'warning',
    position: 'center',
    onClose: () => {}
  },
};

export const Error: Story = {
  name: "Error Toast",
  args: {
    id: 'error-toast',
    title: 'item has been removed successfully',
    position: 'center',
    variant: 'error',
    onClose: () => {}
  },
};


export const PositionToast: Story = {
  name: "Change Toast Position with prop",
  args: {
    id: 'position-toast',
    title: 'item has been removed successfully',
    position: 'bottom-right',
    variant: 'error',
    onClose: () => {}
  },
};
  