import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ComponentA from '../components/ComponentA';

export default {
  title: 'Components/ComponentA',
  component: ComponentA,
} as ComponentMeta<typeof ComponentA>;

const Template: ComponentStory<typeof ComponentA> = (args) => <ComponentA {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'ComponentA',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'ComponentA',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    heading: {
      value: 'de perfecte partner voor jouw Sitecore-project',
    },
  },
};
