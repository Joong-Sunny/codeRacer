import { Meta, StoryObj } from '@storybook/react';
import Character from '@/components/Sentence';

const meta = {
  title: 'Components/Sentence',
  component: Character,
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const SayHi: Story = {
  args: {
    text: 'Hi, my name is',
    userInputText: '',
  },
};

export const SayHiWithInput: Story = {
  args: {
    text: 'Hi, my name is',
    userInputText: 'Hi, my na',
  },
};
