import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  Component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <div>
  <Navbar />
</div>;

export const Base = Template.bind({});
Base.args = {};
