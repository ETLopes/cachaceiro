import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import About from './About';
import QRCode from './QRCode';

const Routes = createAppContainer(
  createStackNavigator({
    QRCode: QRCode,
    Home: Home,
    About: About,
  }),
);

export default Routes;
