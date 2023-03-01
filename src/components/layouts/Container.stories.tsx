import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '../typography/Heading';
import P from '../typography/P';
import Container from './Container';

export default {
  title: 'Components/Layouts/Container',
  Component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => <div>
  <Container {...args}>
    <Heading>
      Container
    </Heading>
    <P>
      Body
    </P>
  </Container>
</div>;

export const Base = Template.bind({});
Base.args = {};
