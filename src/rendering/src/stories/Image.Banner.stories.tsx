import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Banner } from '../components/Image';

export default {
  title: 'Components/Image',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const BannerImage = Template.bind({});
BannerImage.args = {
  params: {
    name: 'Banner',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Banner',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    ImageCaption: {
      value: 'foto caption',
    },
    Image: {
      value: {
        src: '/img/bg.jpg',
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
