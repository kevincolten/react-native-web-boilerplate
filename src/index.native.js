import Expo from 'expo';
import App from './containers/App/index.native';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);
