import { ComponentMeta, ComponentStory } from '@storybook/react';
import P from './P';

export default {
  title: 'Components/Typography/P',
  Component: P,
  argTypes: {
    children: {
      defaultValue: 'By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.',
      control: 'text'
    },
  }

} as ComponentMeta<typeof P>

const Template: ComponentStory<typeof P> = (args) => <div>
  <P {...args}>
    {args.children}
  </P>
</div>;

export const Base = Template.bind({});
Base.args = {};
