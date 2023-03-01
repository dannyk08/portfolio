import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '../typography/Heading';
import P from '../typography/P';
import Page from './Page';

export default {
  title: 'Components/Layouts/Page',
  Component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <div>
  <Page {...args}>
    <Heading>
      Page
    </Heading>
    <P>
      Body
    </P>
  </Page>
</div>;

export const Base = Template.bind({});
Base.args = {};
