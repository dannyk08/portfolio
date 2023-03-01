import { ComponentMeta, ComponentStory } from '@storybook/react';
import Cap from './Cap';

export default {
  title: 'Components/Typography/Cap',
  Component: Cap,
  argTypes: {
    children: {
      defaultValue: 'Cap Label',
      control: 'text'
    },
  }

} as ComponentMeta<typeof Cap>

const Template: ComponentStory<typeof Cap> = (args) => <div>
  <Cap {...args}>
    {args.children}
  </Cap>
</div>;

export const Base = Template.bind({});
Base.args = {};
