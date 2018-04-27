import PageOne from './containers/PageOne';
import PageTwo from './containers/PageTwo';
import NoMatch from './containers/NoMatch';

export default [
  {
    path: '/page/one',
    component: PageOne,
    fetchInitialData:() => Promise.resolve(["here's", "a", "test"])
  },
  {
    path: '/page/two',
    component: PageTwo
  },
  {
    path: '',
    component: NoMatch
  }
]
