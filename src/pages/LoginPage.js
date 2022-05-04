import React, {useEffect, useState} from 'react';
import {login} from '../../services/user.service';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setLogin = loginStore(state => state.setLogin);

  function registerUser() {
    login(email, password).then(res => {
      setLogin(true);
    }).catch(err => {
      console.log('Error el logear al usuario', err);
    })
  }

  return(
    <form>
      <h3>Login to Continue</h3>
      <input placeholder={'Enter email'} value={email} onChangeText={(value) => setEmail(value)}></input>
      <input placeholder={'Enter password'} value={password} onChangeText={(value) => setPassword(value)}></input>
    </form>

    // <SafeAreaView style={{flex: 1}}>
    //   <TextInput placeholder={'Email'} value={email} onChangeText={(value) => setEmail(value)}/>
    //   <TextInput placeholder={'Contraseña'} value={password} onChangeText={(value) => setPassword(value)}/>
    //   <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}} onPress={() => registerUser()}>
    //     <Text>LOGIN</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
})