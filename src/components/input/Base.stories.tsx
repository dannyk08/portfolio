import { ComponentStory } from '@storybook/react';
import BaseInput from './Base';

export default {
  title: 'Components/Input',
  Component: BaseInput,
  argTypes: {
    entryType: {
      defaultValue: 'text',
      control: 'select',
      options: [
        'text',
        'email',
        'textarea',
      ]
    },
    error: {
      defaultValue: false,
      control: 'boolean'
    },
    disabled: {
      defaultValue: false,
      control: 'boolean'
    },
  }
}

const Template: ComponentStory<typeof BaseInput> = (args) => <div>
  <BaseInput {...args} />
</div>;


export const Base = Template.bind({});
Base.args = {};
