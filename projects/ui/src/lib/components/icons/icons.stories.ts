import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { IconsComponent } from './icons.component';

const meta: Meta<IconsComponent> = {
  title: 'Components/Icons',
  component: IconsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<IconsComponent>;

export const Default: Story = {
  args: {
    name: 'accessible',
    fill: 'black',
    width: 25,
  },
};
