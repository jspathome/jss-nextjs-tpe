import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from '../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Tabs',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Tabs',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
};
