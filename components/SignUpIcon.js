/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';

export function SignUpIcon({navigation}) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#00337C',
    height: 39,
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
