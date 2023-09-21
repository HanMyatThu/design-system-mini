import type { Meta, StoryObj } from '@storybook/react';
import Icon from "./Icons";

const meta = {
    title: 'Components/Icons',
    component: Icon,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Icon>;
  
export default meta;
type Story = StoryObj<typeof meta>;


export const GlobalIcon: Story = {
    name: "Global Icon",
    args: {
        type: 'icon-global',
    },
};

export const HeartIcon: Story = {
    name: "Heart Icon",
    args: {
        type: 'icon-heart',
    },
};

export const ScheduleIcon: Story = {
    name: "Schedule Icon",
    args: {
        type: 'icon-schedule',
    },
};

export const ToolIcon: Story = {
    name: "Tool Icon",
    args: {
        type: 'icon-tool',
    },
};

export const Close: Story = {
    name: "Close Icon",
    args: {
        type: 'icon-close',
    },
};

export const Info: Story = {
    name: "Info Icon",
    args: {
        type: 'icon-info',
    },
};

export const Bulb: Story = {
    name: "Bulb Icon",
    args: {
        type: 'icon-bulb',
    },
};

export const CrossCicle: Story = {
    name: "Circle Cross Icon",
    args: {
        type: 'icon-cross-circle',
    },
};


export const CheckIcon: Story = {
    name: "Circle Check Icon",
    args: {
        type: 'icon-check',
    },
};

export const MadIcon: Story = {
    name: "Mad Icon",
    args: {
        type: 'icon-mad',
    },
};

export const IconAdjust: Story = {
    name: "Icon with Props",
    args: {
        type: 'icon-mad',
        width: '32px',
        height: '32px',
        fill: 'red',
        viewBox: '0 0 32 32'
    }
}
