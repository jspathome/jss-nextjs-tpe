import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type JspProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Jsp = (props: JspProps): JSX.Element => (
  <div>
    <p>Jsp Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<JspProps>(Jsp);
