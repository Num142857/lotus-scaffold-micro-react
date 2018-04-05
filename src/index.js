import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


if(process.env.NODE_ENV==='development'){
  ReactDOM.render(<App />, document.getElementById('root'));
}


const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent:() => <App />,
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