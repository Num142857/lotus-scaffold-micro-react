import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { observer, inject, Provider} from 'mobx-react';
// ReactDOM.render(<App />, document.getElementById('root'));

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: (spa) => {
      return <Provider store={spa.customProps}>
                <App />
        </Provider>
    },
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