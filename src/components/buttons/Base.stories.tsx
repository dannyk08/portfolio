import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseButton from './Base';

export default {
  title: 'Random',
  Component: BaseButton,
  argTypes: {
    // 
  }

} as ComponentMeta<typeof BaseButton>


const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  // label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  // label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  // size: 'large',
  // label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  // size: 'small',
  // label: 'Button',
};
