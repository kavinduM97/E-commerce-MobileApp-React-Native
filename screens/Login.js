/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
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
import {login} from '../loginR/userAction';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);

  const {userInfo} = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.Email) {
      navigation.navigate('Products');
    } else {
    }
  }, [userInfo, navigation]);

  // const handleError = async () => {
  //   console.log('handle error');
  //   const userInfo = await AsyncStorage.getItem('userInfo');
  //   console.log(userInfo);
  // };
  const handleLogin = () => {
    dispatch(login(email, password));
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
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text>
          <Text style={styles.registerText}> Don't have an account?</Text>{' '}
          <Text style={styles.registerText2}>Register now</Text>{' '}
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
  containerlg: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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
    color: '#03C988',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
