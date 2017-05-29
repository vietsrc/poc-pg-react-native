/* eslint-disable new-cap */
import React, { PropTypes, Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { TMDB_IMG_URL } from '../../../constants/api';
import styles from './styles/SubjectCard';

const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;

class SubjectCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { info, viewSubject } = this.props;
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity activeOpacity={0.9} onPress={viewSubject.bind(this, info.id)}>
          <View style={styles.card}>
            <Image source={{ uri: info.attributes.media.content.src }} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text
                style={styles.cardTitle}
                numberOfLines={3}>
                {info.attributes.title}
              </Text>
              <View style={styles.cardGenre}>
                <Text style={styles.cardGenreItem}>123 articles</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

SubjectCard.propTypes = {
  info: PropTypes.object.isRequired,
  viewSubject: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    moviesGenres: state.articles.genres
  };
}

export default connect(mapStateToProps, null)(SubjectCard);
