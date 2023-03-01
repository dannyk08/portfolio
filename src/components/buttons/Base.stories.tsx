import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonBase from './Base';

export default {
  title: 'Components/Button',
  Component: ButtonBase,
  argTypes: {
    as: {
      defaultValue: 'button',
      control: 'select',
      options: [
        'button',
        'link'
      ]
    },
    type: {
      if: {
        arg: 'as',
        eq: 'button',
      },
      defaultValue: 'button',
      control: 'select',
      options: [
        'button',
        'submit'
      ]
    },
    href: {
      if: {
        arg: 'as',
        eq: 'link',
      },
      defaultValue: 'https://google.com',
      control: 'text',
    }
  }

} as ComponentMeta<typeof ButtonBase>


const Template: ComponentStory<typeof ButtonBase> = (args) => <div>
  <ButtonBase {...args}>
    Button Text
  </ButtonBase>
</div>;


export const Base = Template.bind({});
Base.args = {};
