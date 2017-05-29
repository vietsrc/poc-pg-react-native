import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: {
        paddingTop: 83
      }
    })
  },
  progressBar: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperator: {
    marginTop: 8,
    backgroundColor: 'green'
  }
});

export default styles;
