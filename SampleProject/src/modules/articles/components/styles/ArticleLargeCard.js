import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
    backgroundColor: 'white',
  },
  card: {
    minHeight: 148,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  cardDetails: {
    padding: 16,
    flex: 1
  },
  cardImage: {
    height: 163,
    width: 120
  },
  cardTitle: {
    color: 'black',
    fontSize: 14
  },
  cardGenre: {
    flexDirection: 'row'
  },
  cardGenreItem: {
    fontSize: 11,
    marginRight: 5
  },
  cardDescription: {
    color: '#636363',
    fontSize: 13,
    marginTop: 5
  },
  cardNumbers: {
    flexDirection: 'row',
    marginTop: 5
  },
  cardStar: {
    flexDirection: 'row'
  },
  cardStarRatings: {
    marginLeft: 5,
    fontSize: 12
  },
  cardRunningHours: {
    marginLeft: 5,
    fontSize: 12
  }
});

export default styles;
