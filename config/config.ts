// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: '杭州八仙人力资源管理系统',
    locale: true,
    logo:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAA3CAYAAACo0kcqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMUMxQkM2NUY0OTExRTlBNjgwRkRFMjY1Rjc4NEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwMUMxQkM3NUY0OTExRTlBNjgwRkRFMjY1Rjc4NEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjAxQzFCQzQ1RjQ5MTFFOUE2ODBGREUyNjVGNzg0RTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjAxQzFCQzU1RjQ5MTFFOUE2ODBGREUyNjVGNzg0RTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5biE+HAAAOWUlEQVR42uxd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',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './ListTableList',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      name: 'salary.salary-items',
      icon: 'PayCircle',
      path: '/salary',
      component: './salary/SalaryItems',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
