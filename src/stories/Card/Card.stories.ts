import type { Meta, StoryObj } from '@storybook/react';
import {
  IconCard
} from "./Card";

const meta = {
  title: 'Components/Card',
  component: IconCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconCard>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const CardComponent: Story = {
  name: "Card",
  args: {
    title: "Hello",
  },
};

export const CardIcon: Story = {
    name: "Icon Card",
    args: {
      id: 'icon-card',
      icon: 'icon-global',
      title: 'Supervisory',
      iconProps: {
        width: '24px',
        height: '24px',
        fill: 'gray'
      }
    },
  };
  