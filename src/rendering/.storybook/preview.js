import { SitecoreContext, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

import ContentBlock from '../src/components/ContentBlock'
import StyleguideLayout from '../src/components/styleguide/Styleguide-Layout'
import ComponentA from '../src/components/ComponentA'

import "../src/styles/globals.css"

import 'bootstrap/dist/css/bootstrap.css';
import "../src/assets/app.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const mockSitecoreContext = {
  context: {
    pageEditing: false,
  },
  setContext: () => { },
};

export const mockComponentFactory = function (context) {

  const components = new Map();
  console.log("mockComponentFactory triggerd.");
  
  components.set('ContentBlock', ContentBlock );
  components.set('jss-styleguide-layout', Placeholder );
  components.set('Styleguide-Layout', StyleguideLayout );
  components.set('ComponentA', ComponentA );
  
  console.log(components);

  const componentName = context.args.params.name;
  console.log(componentName);
  const component = components.get(componentName) ;

  if (component?.element) {
    return component.element();
  }

  console.log(component);
  console.log("mockComponentFactory end.");
  return component?.default || component;
};

const withSitecoreProvider=(Story,context)=>{
  return (
    <>       
      <div className='p-2 rounded border text-center border-red-700 text-red-700 text-md bg-gray-400'>custom-decorators</div>        
      <SitecoreContext context={mockSitecoreContext} componentFactory={ mockComponentFactory(context)}>
        <Story />
      </SitecoreContext>
    </>
)
}

export const decorators = [withSitecoreProvider];
