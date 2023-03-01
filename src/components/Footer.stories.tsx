import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  Component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <div>
  <Footer />
</div>;

export const Base = Template.bind({});
Base.args = {};
