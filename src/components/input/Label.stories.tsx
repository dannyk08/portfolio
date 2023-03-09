import { ComponentStory } from '@storybook/react';
import Label from './Label';

const config = {
  title: 'Components/Input/Label',
  Component: Label,
  argTypes: {
    value: {
      defaultValue: 'Name *',
      control: 'text'
    }
  }
}

const Template: ComponentStory<typeof Label> = (args) => <div>
  <Label {...args} />
</div>;


export const Base = Template.bind({});
Base.args = {};

export default config
