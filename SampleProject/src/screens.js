/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Home from './modules/articles/Home';
import Recommendations from './modules/articles/Recommendations';
import Subjects from './modules/articles/Subjects';
import Categories from './modules/articles/Categories';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('app.Home', () => Home, store, Provider);
  Navigation.registerComponent('app.Recommendations', () => Recommendations, store, Provider);
  Navigation.registerComponent('app.Subjects', () => Subjects, store, Provider);
  Navigation.registerComponent('app.Categories', () => Categories, store, Provider);
}

