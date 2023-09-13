import { Meta, StoryObj } from '@storybook/angular';

import { BrnInputComponent } from './input.component';

const meta: Meta<BrnInputComponent> = {
  title: 'Components/Input',
  component: BrnInputComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<BrnInputComponent>;

const render = (args: Story) => ({
  props: args,
  template: `
  `,
});

export const Default: Story = {
  args: {
    label: 'Default',
    name: 'default',
  },
  render,
};
