import { ComponentStory } from '@storybook/react';
import BaseConfig from './Base.stories'

import PrimaryButton from './Primary'

export default {
  ...BaseConfig,
  title: 'Components/Button/Primary'
}

const Template: ComponentStory<typeof PrimaryButton> = (args) => <div>
  <PrimaryButton {...args}>
    Button Text
  </PrimaryButton>
</div>;


export const Default = Template.bind({});
Default.args = {};
