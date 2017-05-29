import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#303F9F',
  statusBarTextColorScheme: 'light',
  navBarBackgroundColor: '#3F51B5',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  topBarElevationShadowEnabled: true,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  topTabTextColor: '#ffffff88',
  selectedTopTabTextColor: 'white',
  selectedTopTabIndicatorHeight: 10,
  selectedTopTabIndicatorColor: '#FF4081'
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'app.Home',
    title: 'Home',
    navigatorStyle,
    topTabs: [
      {
        screenId: 'app.Recommendations',
        title: 'Recommendations'
      },
      {
        screenId: 'app.Categories',
        title: 'Catégories'
      },
      {
        screenId: 'app.Subjects',
        title: 'Sujets'
      }
    ]
  }
});
