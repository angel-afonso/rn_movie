import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cover: {
    height: 300,
    width: 200,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  movieInfo: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    padding: 5,
    textAlign: 'justify',
  },
  rating: {
    fontSize: 10,
    alignSelf: 'flex-end',
    padding: 5,
  },
});
