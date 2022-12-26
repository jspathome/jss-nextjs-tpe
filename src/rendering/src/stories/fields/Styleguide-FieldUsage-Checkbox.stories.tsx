import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageCheckbox from '../../components/fields/Styleguide-FieldUsage-Checkbox';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-Checkbox',
  component: StyleguideFieldUsageCheckbox,
} as ComponentMeta<typeof StyleguideFieldUsageCheckbox>;

const Template: ComponentStory<typeof StyleguideFieldUsageCheckbox> = (args) => (
  <StyleguideFieldUsageCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-Checkbox',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Styleguide-FieldUsage-Checkbox',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    heading: {
      value: 'Checkbox',
    },
    description: {
      value:
        'Note: Sitecore does not support inline editing of Checkbox fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.',
    },
    checkbox: {
      value: true,
    },
    checkbox2: {
      value: false,
    },
  },
};
