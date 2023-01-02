import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultImage } from '../components/Image';

export default {
  title: 'Components/Image',
  component: DefaultImage,
} as ComponentMeta<typeof DefaultImage>;

const Template: ComponentStory<typeof DefaultImage> = (args) => <DefaultImage {...args} />;

export const DefaultImageTemplate = Template.bind({});
DefaultImageTemplate.args = {
  params: {
    name: 'Image',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Image',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    ImageCaption: {
      value: 'foto caption',
    },
    Image: {
      value: {
        src: '/img/sc_logo.png',
        alt: 'Sitecore Logo',
      },
    },
    TargetUrl: {
      value: {
        href: 'https://www.sitecore.com',
        text: 'Link',
      },
    },
  },
};
