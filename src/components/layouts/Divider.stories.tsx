import { ComponentMeta, ComponentStory } from '@storybook/react';
import P from '../typography/P';
import Divider from './Divider';

export default {
  title: 'Components/Layouts/Divider',
  Component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = () => <div>
  <P>
    Text above divider
  </P>
  <Divider />
  <P>
    Text below divider
  </P>
</div >;

export const Base = Template.bind({});
Base.args = {};
