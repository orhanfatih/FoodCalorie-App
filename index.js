/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './assets/config/stack';

AppRegistry.registerComponent(appName, () => AppContainer);
