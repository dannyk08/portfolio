import { ComponentMeta, ComponentStory } from '@storybook/react';
import Thumbnail from './Thumbnail';
import Heading from './typography/Heading';
import P from './typography/P';

export default {
  title: 'Components/Thumbnail',
  Component: Thumbnail,
} as ComponentMeta<typeof Thumbnail>

const Template: ComponentStory<typeof Thumbnail> = () => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <Thumbnail>
    <Heading>Thumbnail title</Heading>
    <P>Thumbnail Body</P>
  </Thumbnail>
</div>;

export const Base = Template.bind({});
Base.args = {};
