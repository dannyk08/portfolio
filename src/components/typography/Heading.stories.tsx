import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading, { headings } from './Heading';

export default {
  title: 'Components/Typography/Heading',
  Component: Heading,
  argTypes: {
    children: {
      defaultValue: 'Heading Text',
      control: 'text'
    },
    size: {
      defaultValue: 'h1',
      control: 'select',
      options: headings
    }
  }

} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <div>
  <Heading {...args}>
    {args.children}
  </Heading>
</div>;

export const H1 = Template.bind({});
H1.args = {};

export const H2 = Template.bind({});
H2.args = {
  size: 'h2'
};

export const H3 = Template.bind({});
H3.args = {
  size: 'h3'
};

export const H4 = Template.bind({});
H4.args = {
  size: 'h4'
};

export const H5 = Template.bind({});
H5.args = {
  size: 'h5'
};

