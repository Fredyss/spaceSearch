import { Route, Switch } from 'react-router-dom';
import { Home } from "./containers/Home/Home"
import { WatchLater } from "./containers/WatchLater/WatchLater"
import { Favourites } from './containers/Favourites/Favourites';

export const Routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/watch-later" component={WatchLater} />
    <Route exact path="/favourites" component={Favourites} />
  </Switch>
);