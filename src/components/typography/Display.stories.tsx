import { ComponentMeta, ComponentStory } from '@storybook/react';
import Display from './Display';

export default {
  title: 'Components/Typography/Display',
  Component: Display,
  argTypes: {
    children: {
      defaultValue: 'Display Title',
      control: 'text'
    },
    weight: {
      defaultValue: 'strong',
      control: 'select',
      options: [
        'strong',
        'light'
      ]
    }
  }

} as ComponentMeta<typeof Display>

const Template: ComponentStory<typeof Display> = (args) => <div>
  <Display {...args}>
    {args.children}
  </Display>
</div>;

export const Strong = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Strong.args = {};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  weight: 'light'
};
