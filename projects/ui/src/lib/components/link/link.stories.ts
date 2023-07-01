import { Meta, StoryObj } from '@storybook/angular';

import { BrnLinkComponent } from './link.component';

const meta: Meta<BrnLinkComponent> = {
  title: 'Components/Link',
  component: BrnLinkComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<BrnLinkComponent>;

export const Default: Story = {
  args: {
    label: 'Link',
  },
  render: (args: BrnLinkComponent) => ({
    template: `
      <a brn-link href="#">${args.label}</a>
    `,
    props: {
      args: {
        ...args,
        label: 'Link',
      },
    },
  }),
};
