import {useNavigation} from '@react-navigation/native';

export function useGoToDetails(id) {
  const navigation = useNavigation();

  function goToDetails() {
    navigation.push('details', {id});
  }

  return goToDetails;
}
