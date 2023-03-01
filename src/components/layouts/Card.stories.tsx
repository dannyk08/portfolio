import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '../typography/Heading';
import P from '../typography/P';
import Card from './Card';

export default {
  title: 'Components/Layouts/Card',
  Component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <div>
  <Card {...args}>
    <Heading>
      Card Title
    </Heading>
    <P>
      Body
    </P>
  </Card>
</div>;

export const Base = Template.bind({});
Base.args = {};
