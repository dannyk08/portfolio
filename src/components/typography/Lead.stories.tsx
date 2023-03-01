import { ComponentMeta, ComponentStory } from '@storybook/react';
import Lead from './Lead';

export default {
  title: 'Components/Typography/Lead',
  Component: Lead,
  argTypes: {
    children: {
      defaultValue: 'Silver mist suffused the deck of the ship.',
      control: 'text'
    },
  }

} as ComponentMeta<typeof Lead>

const Template: ComponentStory<typeof Lead> = (args) => <div>
  <Lead {...args}>
    {args.children}
  </Lead>
</div>;

export const Base = Template.bind({});
Base.args = {};
