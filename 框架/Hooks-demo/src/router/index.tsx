import { Home } from '../page/home';
import { List } from '../page/list';
import { Demo } from '../page/demo';
export default {
  routes: [
    { path: '/', component: <Home /> },
    { path: '/list', component: <List /> },
    { path: '/demo', component: <Demo /> },
  ],
};
