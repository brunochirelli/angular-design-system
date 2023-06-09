import type { Meta, StoryObj } from '@storybook/angular';

import { BrnButtonComponent } from './button.component';

const meta: Meta<BrnButtonComponent> = {
  title: 'Example/Button',
  component: BrnButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
      control: {
        type: 'radio',
      },
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<BrnButtonComponent>;

export const Default: Story = {
  args: {
    variant: 'primary',
    label: 'Botão',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Botão Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Botão Secondary',
  },
};
