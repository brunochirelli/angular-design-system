import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import {
  BrnCardBodyComponent,
  BrnCardComponent,
  BrnCardHeaderComponent,
} from './card.component';
import { CardType } from './card.model';

const meta: Meta<CardType> = {
  title: 'Components/Card/Card Body',
  component: BrnCardBodyComponent,
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
      declarations: [
        BrnCardComponent,
        BrnCardHeaderComponent,
        BrnCardBodyComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<CardType>;

const render = (args: CardType) => ({
  props: {
    args: {
      ...args,
      label: args.label,
    },
  },
  template: `
    <brn-card variant="${args.variant}">
      <brn-card-body>${args.label}</brn-card-body>
    </brn-card>
  `,
});

const renderWithHeader = (args: CardType) => ({
  props: {
    args: {
      ...args,
      label: args.label,
    },
  },
  template: `
    <brn-card variant="${args.variant}">
      <brn-card-header>Card Header</brn-card-header>
      <brn-card-body>${args.label}</brn-card-body>
    </brn-card>
  `,
});

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Card Body',
  },
  render,
};

export const WithHeader: Story = {
  args: {
    variant: 'outline',
    label: 'Card Body',
  },
  render: renderWithHeader,
};
