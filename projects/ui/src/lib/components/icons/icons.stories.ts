import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { BrnIconsComponent } from './icons.component';

const meta: Meta<BrnIconsComponent> = {
  title: 'Components/Icons',
  component: BrnIconsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<BrnIconsComponent>;

export const Default: Story = {
  args: {
    name: 'accessible',
    fill: 'black',
    width: 25,
  },
};
