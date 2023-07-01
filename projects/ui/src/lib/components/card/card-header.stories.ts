import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { BrnCardComponent, BrnCardHeaderComponent } from './card.component';

type MetaCard = Meta<BrnCardHeaderComponent & BrnCardComponent>;

const meta: MetaCard = {
  title: 'Components/Card/Card Header',
  component: BrnCardHeaderComponent,
  argTypes: {
    variant: {
      options: ['default', 'outline'],
      defaultValue: 'default',
      control: {
        type: 'radio',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [BrnCardComponent, BrnCardHeaderComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<BrnCardHeaderComponent & BrnCardComponent>;

const render = (args: BrnCardHeaderComponent & BrnCardComponent) => ({
  props: {
    args: {
      ...args,
      label: args.label,
    },
  },
  template: `
    <brn-card variant="${args.variant}">
      <brn-card-header>${args.label}</brn-card-header>
    </brn-card>
  `,
});

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Card Header',
  },
  render,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Card Header',
  },
  render,
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Card Header',
  },
  render,
};
