import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageCustom from '../../components/fields/Styleguide-FieldUsage-Custom';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Custom',
  component: StyleguideFieldUsageCustom,
} as ComponentMeta<typeof StyleguideFieldUsageCustom>;

const Template: ComponentStory<typeof StyleguideFieldUsageCustom> = (args) => (
  <StyleguideFieldUsageCustom {...args} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Custom',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Styleguide-FieldUsage-Custom',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    heading: {
      value: 'Heading',
    },
    description: {
      value: 'Description',
    },
    customIntField: {
      value: '10000000',
    },
  },
};
