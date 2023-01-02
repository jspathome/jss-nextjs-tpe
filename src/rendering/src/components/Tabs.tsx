import { withPlaceholder } from '@sitecore-jss/sitecore-jss-react';
import { ComponentProps } from 'lib/component-props';
import Tab from './Tab';

type TabsProps = ComponentProps & {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  return <div>{tabs}</div>;
};

export default withPlaceholder('tabs')(Tabs);

// import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
// import { ComponentProps } from 'lib/component-props';

// type TabsProps = ComponentProps & {
//   fields: {
//     heading: Field<string>;
//   };
// };

// const Tabs = (props: TabsProps): JSX.Element => (
//   <div>
//     <p>Tabs Component</p>
//     <Text field={props.fields.heading} />
//   </div>
// );

// export default withDatasourceCheck()<TabsProps>(Tabs);