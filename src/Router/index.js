import React from 'react'
import { Router, browserHistory } from 'react-router'

const context = require.context('../models', false, /\_router.js$/);
console.log(context)
context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key));
  
  let RouteConfig = [
    {
      component: GlobalComponent,
      exact: true
    }
  ]

  const Routes = () => (<Router history={browserHistory} routes={RouteConfig} />)
  export default Routes