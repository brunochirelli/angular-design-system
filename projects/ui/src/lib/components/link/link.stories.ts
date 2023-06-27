import { Meta, StoryObj } from '@storybook/angular';

import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<LinkComponent>;

export const Default: Story = {
  args: {
    label: 'Link',
  },
  render: (args: LinkComponent) => ({
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
