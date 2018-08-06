export default [{
    component: Layout,
    breadcrumbName: '菜单',
    path: '/menu',
    key: uniqueId('route'),
    childRoutes: [
      {
        path: '/menu/test',
        breadcrumbName: `股权管理`,
        exact: true,
        key: uniqueId('route'),
        onEnter: async (nextState, replace, cb) => {},
        onLeave: (prevState) => {},
        childRoutes: [
          {
            path: '/menu/test/list',
            breadcrumbName: 'test',
            getComponents: (location, cb) => {
              require.ensure([], require => {
                cb(null, require('./test').default)
              }, 'test')
            },
            onEnter: routerInterceptor
          },
        ]
      }
    ]
  },
  
  ]
  
  