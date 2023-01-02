import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tab from '../components/Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Tab',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Tab',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
};
