import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://yts.mx/api/v2';

AppRegistry.registerComponent(appName, () => App);
