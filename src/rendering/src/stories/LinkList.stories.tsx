import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkList from '../components/LinkList';

export default {
  title: 'Components/LinkList',
  component: LinkList,
} as ComponentMeta<typeof LinkList>;

const Template: ComponentStory<typeof LinkList> = (args) => <LinkList {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'LinkList',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'LinkList',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
};
