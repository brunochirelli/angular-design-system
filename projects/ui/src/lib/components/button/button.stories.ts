import { type Meta, type StoryObj } from '@storybook/angular';

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
    size: {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<BrnButtonComponent>;

const render = (args: BrnButtonComponent) => ({
  props: {
    args: {
      ...args,
      label: args.label,
    },
  },
  template: `
    <button brn-button variant="${args.variant}" size="${args.size}">${args.label}</button>
  `,
});

export const Default: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
  render,
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button Primary',
  },
  render,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button Secondary',
  },
  render,
};

export const Small: Story = {
  args: {
    variant: 'primary',
    label: 'Button Small',
    size: 'sm',
  },
  render,
};
export const Large: Story = {
  args: {
    variant: 'primary',
    label: 'Button Large',
    size: 'lg',
  },
  render,
};
