import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from './CheckBox';

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;
  
export default meta;
type Story = StoryObj<typeof meta>;


export const CheckBoxComponent: Story = {
  name: "CheckBox",
  args: {
    size: 'large',
    color: 'default',
    defaultChecked: false,
    isDisabled: false,
  },
};

export const DefaultChecked: Story = {
    name: "Default Checked",
    args: {
      size: 'large',
      color: 'green',
      defaultChecked: true,
      isDisabled: false,
    },
};

export const DefaultDisabled: Story = {
    name: "Default Disabled",
    args: {
      size: 'large',
      color: 'default',
      defaultChecked: true,
      isDisabled: true,
    },
};

export const CheckWithLink: Story = {
    name: "Checked with Etralink",
    args: {
        size: 'medium',
        color: 'default',
        defaultChecked: false,
        isDisabled: false,
        link: 'I agree with',
        sublink: "Term & Conditions",
        onClickSubLink: () => alert('Clicked')
    },
}
