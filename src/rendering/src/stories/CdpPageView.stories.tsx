import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CdpPageView from '../components/CdpPageView';

export default {
  title: 'Components/CdpPageView',
  component: CdpPageView,
} as ComponentMeta<typeof CdpPageView>;

const Template: ComponentStory<typeof CdpPageView> = (args) => <CdpPageView {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'CdpPageView',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'CdpPageView',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
};
