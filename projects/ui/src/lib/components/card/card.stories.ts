import { Meta, StoryObj } from '@storybook/angular';

import { BrnCardComponent } from './card.component';

const meta: Meta<BrnCardComponent> = {
  title: 'Components/Card/Card',
  component: BrnCardComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'outline', 'filled'],
      defaultValue: 'default',
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<BrnCardComponent>;

const render = (args: BrnCardComponent) => ({
  props: {
    args: {
      ...args,
      variant: args.variant,
      label: args.label,
    },
  },
  template: `
    <brn-card brn-button variant="${args.variant}">${args.label}</brn-card>
  `,
});

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Card',
  },
  render,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Card',
  },
  render,
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Card',
  },
  render,
};
