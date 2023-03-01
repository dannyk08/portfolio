import { ComponentMeta, ComponentStory } from '@storybook/react';
import P from '../typography/P';
import ElevationBase from './Base';

export default {
  title: 'Components/Elevation',
  Component: ElevationBase,
  argTypes: {
    elevation: {
      defaultValue: 0,
      control: 'select',
      options: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ]
    }
  }

} as ComponentMeta<typeof ElevationBase>


const Template: ComponentStory<typeof ElevationBase> = (args) => <div>
  <ElevationBase {...args}>
    <p>{args.elevation}</p>
    <br />
    {
      args.elevation === 0 &&
      <div>
        <P>Background, Alerts, Button disabled, Input Forms disabled</P>
      </div>
    }
    {
      args.elevation == 1 &&
      <div>
        <P>Card, Pressed button, Progressive button</P>
      </div>
    }
    {
      args.elevation == 2 &&
      <div>
        <P>Button, Notification badges</P>
      </div>
    }
    {
      args.elevation == 3 &&
      <div>
        <P>Navigation Menu, Bar</P>
      </div>
    }
    {
      args.elevation == 4 &&
      <div>
        <P>Card Raised, Button Raised, Dropdown Menu</P>
      </div>
    }
    {
      args.elevation == 5 &&
      <div>
        <P>Picker, Popover</P>
      </div>
    }
    {
      args.elevation == 6 &&
      <div>
        <P>Modals, Dialogue</P>
      </div>
    }
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
