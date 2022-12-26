import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContentBlock from '../components/ContentBlock';
//import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export default {
  title: 'Components/ContentBlock',
  component: ContentBlock,
} as ComponentMeta<typeof ContentBlock>;

const Template: ComponentStory<typeof ContentBlock> = (args) => <ContentBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'ContentBlock',
    componentName: 'ContentBlock',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'ContentBlock',
    dataSource: '{00000000-0000-0000-0000-000000000000}',
  },
  fields: {
    heading: {
      value: 'de perfecte partner voor jouw Sitecore-project',
    },
    content: {
      value:
        'Kies je voor Sitecore dan is uxbee de aangewezen samenwerkingspartner voor een geslaagde ontwikkeling en implementatie. In tegenstelling tot andere technologiepartners, is er binnen ons team veel senioriteit op het gebied van informatietechnologie én marketing. Tel daar onze ervaring in complexe implementaties bij op, en je beschikt over alle kennis en vaardigheden die nodig zijn voor een succesvol Sitecore project.',
    },
  },
};

//Default.decorators = withSitecoreContext()
