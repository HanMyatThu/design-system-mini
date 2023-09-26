import type { Meta, StoryObj } from '@storybook/react';
import {
  Table
} from "./Table";
import { mockData, dataKeys, Headers } from './utils';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;
  
export default meta;
type Story = StoryObj<typeof meta>;


export const Loader: Story = {
  name: "Table",
  args: {
    selector: true,
    headers: Headers,
    data: mockData,
    dataKeys: dataKeys,
    paginator: true,
    start: 1,
    count: 5
  },
};
