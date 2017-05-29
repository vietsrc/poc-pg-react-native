import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as articlesActions from './articles.actions';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  _onRefresh() {
    console.log('HOME onRefresh');
  }

  _onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'search') {
        let rightButtons = [];
        if (Platform.OS === 'ios') {
          rightButtons = [{
            id: 'close',
            title: 'Close',
            icon: iconsMap['ios-close']
          }];
        }
        this.props.navigator.showModal({
          screen: 'app.Journalists',
          title: 'Search',
          navigatorButtons: {
            rightButtons
          }
        });
      }
    }
  }


  render() {
    console.log('HOME render');

    return null;
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  navigator: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
