import { ComponentStory } from '@storybook/react';
import BaseConfig from './Base.stories'

import SecondaryButton from './Secondary'

const config = {
  ...BaseConfig,
  title: 'Components/Button/Secondary'
}

const Template: ComponentStory<typeof SecondaryButton> = (args) => <div>
  <SecondaryButton {...args}>
    Button Text
  </SecondaryButton>
</div>;


export const Default = Template.bind({});
Default.args = {};

export default config
