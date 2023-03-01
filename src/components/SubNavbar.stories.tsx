import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubNavbar from './SubNavbar';

export default {
  title: 'Components/SubNavbar',
  Component: SubNavbar,
} as ComponentMeta<typeof SubNavbar>

const Template: ComponentStory<typeof SubNavbar> = () => <div>
  <SubNavbar />
</div>;

export const Base = Template.bind({});
Base.args = {};
