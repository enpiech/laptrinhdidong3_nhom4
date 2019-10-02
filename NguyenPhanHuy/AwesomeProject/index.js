/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Greeting from './Greeting';
import Blink from './Blink';
import LotsOfStyles from './Styles';
import FixedDimension from './FixedDe';
import FlexDimension from './FlexDe';
import DSSanPham from './DSSanPham';

AppRegistry.registerComponent(appName, () => DSSanPham);
