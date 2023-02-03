/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

export function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return Alert.alert('Error', 'Invalid email');
    }
    if (password.length < 6) {
      return Alert.alert(
        'Error',
        'Password must contain at least 6 characters',
      );
    }
    // Add your authentication logic here
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo1.png')} />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#8A8F9E"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8A8F9E"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text>
          <Text style={styles.registerText}>Already have a Account? </Text>{' '}
          <Text style={styles.registerText2}>Login Now</Text>{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 320,
    height: 160,
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#8A8F9E',
    borderRadius: 10,
    fontSize: 16,
    color: '#161F3D',
  },
  loginBtn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00337C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  registerBtn: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#00337C',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText2: {
    color: '#CD0404',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
