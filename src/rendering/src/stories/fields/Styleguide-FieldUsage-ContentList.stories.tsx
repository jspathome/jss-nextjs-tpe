import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StyleguideFieldUsageContentList from '../../components/fields/Styleguide-FieldUsage-ContentList';

export default {
  title: 'Components/fields/Styleguide-FieldUsage-ContentList',
  component: StyleguideFieldUsageContentList,
} as ComponentMeta<typeof StyleguideFieldUsageContentList>;

const Template: ComponentStory<typeof StyleguideFieldUsageContentList> = (args) => (
  <StyleguideFieldUsageContentList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Styleguide-FieldUsage-ContentList',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Styleguide-FieldUsage-ContentList',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    heading: {
      value: 'Content List',
    },
    description: {
      value:
        'Content Lists are a way to reference zero or more other content items. Referenced items may be shared. To reference a single content item, use an Item Link field.<br/> <strong>Note:</strong> Sitecore does not support inline editing of Content List fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.',
    },
    sharedContentList: [
      {
        name: 'Content List Item 1',
        fields: {
          textField: {
            value: 'Styleguide Content List Item 1 (Shared)',
          },
        },
      },
      {
        name: 'Content List Item 2',
        fields: {
          textField: {
            value: 'Styleguide Content List Item 1 (Shared)',
          },
        },
      },
    ],
    localContentList: [
      {
        name: 'Name',
        fields: {
          fieldName: undefined,
        },
      },
    ],
  },
};
