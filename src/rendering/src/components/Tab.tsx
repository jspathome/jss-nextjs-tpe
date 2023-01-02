import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TabProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Tab = (props: TabProps): JSX.Element => (
  <div>
    <p>Tab Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<TabProps>(Tab);
