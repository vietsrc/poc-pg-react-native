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
    height: 80,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  cardDetails: {
    padding: 16,
    flex: 1
  },
  cardImage: {
    height: 80,
    width: 80
  },
  cardTitle: {
    color: 'black',
    fontSize: 14
  }
});

export default styles;
