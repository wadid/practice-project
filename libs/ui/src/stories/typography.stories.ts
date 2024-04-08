// libs/ui/src/lib/stories/typography.stories.ts
import { Story, Meta } from '@storybook/angular';

export default {
  title: 'Test Story/Fonts & Typography',
  argTypes: {
    scale: {
      control: { type: 'select', options: ['mat-headline-1', 'mat-headline-2', 'mat-body-1', 'mat-button'] },
      description: 'Select typography scale'
    }
  }
} as Meta;

const Template: Story = ({ scale }) => ({
  template: `
    <div class="mat-typography">
      <h1 [ngClass]="scale">H1 Heading</h1>
      <h2 [ngClass]="scale">H2 Heading</h2>
      <p [ngClass]="scale">Paragraph text (body)</p>
      <button [ngClass]="scale" mat-raised-button>Button</button>
    </div>
  `,
  props: {
    scale
  }
});

export const TypographyScales = Template.bind({});
TypographyScales.args = {
  scale: 'mat-headline-1' // Default selection
};
