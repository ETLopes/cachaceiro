import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import About from './About';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    About: About,
  }),
);

export default Routes;
