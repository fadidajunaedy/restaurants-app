import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': List, // default page
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
