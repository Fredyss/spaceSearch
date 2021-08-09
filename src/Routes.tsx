import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Favourites from './containers/Favourites';
import WatchLater from './containers/WatchLater';

export const Routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/watch-later" component={WatchLater} />
    <Route exact path="/favourites" component={Favourites} />
  </Switch>
);