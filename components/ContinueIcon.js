/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';

export function ContinueIcon({navigation}) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Products');
        }}>
        Continue to shopping
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#03C988',
    height: 42,
    width: 150,
    padding: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
