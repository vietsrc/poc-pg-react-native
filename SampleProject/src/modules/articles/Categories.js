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

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isRefreshing: false
    };

//    this._viewMovie = this._viewMovie.bind(this);
//    this._onRefresh = this._onRefresh.bind(this);
//    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    console.log('componentWillMount!');

//    this._retrieveMovies();
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps!');

    if (nextProps.categoriesList) {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    console.log('CATEGORIES render');

    return ( 
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Categories
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Categories.propTypes = {
  actions: PropTypes.object.isRequired,
  categoriesList: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    categoriesList: state.articles.categoriesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
