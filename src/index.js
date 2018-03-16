import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
  rootComponent: (spa) => <App customProps={spa.customProps}/>,
    domElementGetter: () => document.getElementById('root')
  });
  
  export const bootstrap = [
    reactLifecycles.bootstrap,
  ];
  
  export const mount = [
    reactLifecycles.mount,
  ];
  
  export const unmount = [
    reactLifecycles.unmount,
  ];

  registerServiceWorker();