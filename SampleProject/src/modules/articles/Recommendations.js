import React, { Component, PropTypes } from 'react';
import {
  Platform,
  View,
  ListView,
  RefreshControl
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as articlesActions from './articles.actions';
import ArticleLargeCard from './components/ArticleLargeCard';
import ProgressBar from '../global/ProgressBar';
import styles from './styles/ArticlesList';


class Recommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isRefreshing: false,
      currentPage: 1,
      recommendedArticlesList: {
        data: []
      }
    };

    this._viewArticle = this._viewArticle.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount()');
    this._retrieveArticlesList();
  }

  _retrieveArticlesList(isRefreshed) {
    console.log('retrieveArticlesList()');
    this.props.actions.retrieveRecommendedArticlesList(this.state.currentPage)
      .then(() => {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.recommendedArticlesList.data);
        this.setState({
          recommendedArticlesList: this.props.recommendedArticlesList,
          dataSource,
          isLoading: false
        });
      });
    if (isRefreshed && this.setState({ isRefreshing: false }));
  }

  _retrieveNextPage(type) {
    console.log('RECOMMENDATIONS retrieveNextPage()');
  }

  _viewArticle(articleId) {
    console.log('RECOMMENDATIONS viewArticle()');
  }

  _onRefresh() {
    this.setState({ isRefreshing: true });
    this._retrieveArticlesList('isRefreshed');
  }

  render() {
    return (
      this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
        <ListView
          style={styles.container}
          enableEmptySections
          onEndReached={type => this._retrieveNextPage(this.props.type)}
          onEndReachedThreshold={1200}
          dataSource={this.state.dataSource}
          renderRow={rowData => <ArticleLargeCard info={rowData} viewArticle={this._viewArticle} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.seperator} />}
          renderFooter={() => <View style={{ height: 50 }}><ProgressBar /></View>}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              colors={['#EA0000']}
              tintColor="white"
              title="loading..."
              titleColor="white"
              progressBackgroundColor="white"
            />
          }
        />
    );
  }
}

Recommendations.propTypes = {
  actions: PropTypes.object.isRequired,
  recommendedArticlesList: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    recommendedArticlesList: state.articles.recommendedArticlesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
