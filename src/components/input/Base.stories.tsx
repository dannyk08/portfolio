import { ComponentStory } from '@storybook/react';
import BaseInput from './Base';

const config = {
  title: 'Components/Input/Base',
  Component: BaseInput,
  argTypes: {
    value: {
      control: 'text',
      defaultValue: 'Base input text'
    },
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
  <BaseInput {...args} onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => event.target.value} />
</div>;


export const Base = Template.bind({});
Base.args = {};

export const TextArea = Template.bind({});
TextArea.args = {
  entryType: 'textarea'
};

export default config
