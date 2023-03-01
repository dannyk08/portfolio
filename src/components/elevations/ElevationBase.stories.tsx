import { ComponentMeta, ComponentStory } from '@storybook/react';
import ElevationBase from './Base';

export default {
  title: 'Components/Elevation',
  Component: ElevationBase,
  argTypes: {
    elevation: {
      defaultValue: 0,
      control: 'number'
    }
  }

} as ComponentMeta<typeof ElevationBase>


const Template: ComponentStory<typeof ElevationBase> = (args) => <div>
  <ElevationBase {...args}>
    <p>{args.elevation}</p>
  </ElevationBase>
</div>;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  elevation: 0,
};

export const Card = Template.bind({});
Card.args = {
  elevation: 1,
};

export const Button = Template.bind({});
Button.args = {
  elevation: 2,
};

export const NavMenu = Template.bind({});
NavMenu.args = {
  elevation: 3,
};

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  elevation: 4,
};

export const Popover = Template.bind({});
Popover.args = {
  elevation: 5,
};

export const Modal = Template.bind({});
Modal.args = {
  elevation: 6,
};
