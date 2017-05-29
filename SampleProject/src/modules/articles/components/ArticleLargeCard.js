/* eslint-disable new-cap */
import React, { PropTypes, Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/ArticleLargeCard';

class ArticleLargeCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { info, viewArticle } = this.props;
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity activeOpacity={0.9} onPress={viewArticle.bind(this, info.id)}>
          <View style={styles.card}>
            <Image source={{ uri: info.attributes.media.content.src }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text
                style={styles.cardTitle}
                numberOfLines={3}>
                {info.attributes.title}
              </Text>
              <View style={styles.cardGenre}>
                <Text style={styles.cardGenreItem}>{info.attributes.slug}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

ArticleLargeCard.propTypes = {
  info: PropTypes.object.isRequired,
  viewArticle: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    moviesGenres: state.articles.genres
  };
}

export default connect(mapStateToProps, null)(ArticleLargeCard);
