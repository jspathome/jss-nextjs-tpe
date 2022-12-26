import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ComponentAProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ComponentA = (props: ComponentAProps): JSX.Element => (
  <div>
    <p>ComponentA Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<ComponentAProps>(ComponentA);
