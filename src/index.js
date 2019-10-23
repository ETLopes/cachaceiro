import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import About from './About';
import ScanScreen from './QRCode';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    ScanScreen: ScanScreen,
    About: About,
  }),
);

export default Routes;
