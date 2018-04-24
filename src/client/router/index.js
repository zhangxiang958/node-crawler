import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

// 使用 react 路由懒加载方法：在 route 标签像例子那样写好，并且在前面使用 import 引入所要的组件
import App  from '../views/App.jsx';
import IndexPage from '../views/index/index.jsx';
import MutiPage from '../views/muti/index.jsx';
// //son router
// import CategoriesRouter from './CategoriesRouter.jsx';

const router = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={ IndexPage } />
        <Route path="/muti" component={ MutiPage } />
      </Switch>
    </App>
  </Router>
);


export default router;