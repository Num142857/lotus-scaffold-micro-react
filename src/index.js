import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import registerServiceWorker from './registerServiceWorker';
import RootComponent from './root.component';
import { storeInstance } from './Store'
import './index.less';

if(process.env.NODE_ENV==='development'){
  ReactDOM.render(<RootComponent store={storeInstance} globalEventDistributor={true}/>, document.getElementById('root'));
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: (spa) => <RootComponent/>,
    domElementGetter: () => document.getElementById('root')
  });
  
  export const bootstrap = [
    reactLifecycles.bootstrap,
  ];
  
export function mount(props) {
  return reactLifecycles.mount(props).then((rootComponent) => {
    rootComponent.setStore(props.customProps.store);
    rootComponent.setGlobalEventDistributor(props.customProps.globalEventDistributor);
  });
}
  
  export const unmount = [
    reactLifecycles.unmount,
  ];

  registerServiceWorker();