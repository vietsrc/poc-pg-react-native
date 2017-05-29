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
import SubjectCard from './components/SubjectCard';
import ProgressBar from '../global/ProgressBar';
import styles from './styles/ArticlesList';

class Subjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isRefreshing: false,
      currentPage: 1,
      subjectsList: {
        data: []
      }
    };

    this._viewSubject = this._viewSubject.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount!');
    this._retrieveSubjectsList();
  }

  _retrieveSubjectsList(isRefreshed) {
    console.log('retrieveSubjectsList()');
    this.props.actions.retrieveSubjectsList(this.state.currentPage)
      .then(() => {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(this.props.subjectsList.data);
        this.setState({
          subjectsList: this.props.subjectsList,
          dataSource,
          isLoading: false
        });
      });
    if (isRefreshed && this.setState({ isRefreshing: false }));
  }

  _retrieveNextPage(type) {
    console.log('SUBJECTS retrieveNextPage()');
  }

  _viewSubject(subjectId) {
    console.log('SUBJECTS viewSubject()');
  }

  _onRefresh() {
    this.setState({ isRefreshing: true });
    this._retrieveSubjectsList('isRefreshed');
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
          renderRow={rowData => <SubjectCard info={rowData} viewSubject={this._viewSubject} />}
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

Subjects.propTypes = {
  actions: PropTypes.object.isRequired,
  subjectsList: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    subjectsList: state.articles.subjectsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
