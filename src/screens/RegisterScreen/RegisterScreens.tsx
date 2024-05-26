import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';

import {LogoComponent} from '@brand';
import {Button, Input} from '@components';
import {useRegisterUser} from '@domain';
import {useAppData} from '@hooks';
import {Responsive} from '@services';
import {colors} from '@theme';

import {styles} from './Register.styles';

export const RegisterScreens = () => {
  const [text, setText] = useState('');
  const {users} = useAppData();
  const {isLoading, handleRegisterUser} = useRegisterUser({
    onSuccess: data => {
      console.log('success');
    },
    onError: error => {
      Alert.alert('Erro', error);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LogoComponent percentWidth={Responsive.widthScale(0.5)} />

        <View style={styles.inputContent}>
          <Text style={styles.title}>Buscar usuário</Text>
          <Text style={styles.subtitle}>
            Crie sua conta através do seu usuário do GitHub
          </Text>
          <Input
            iconName="account-circle"
            colorIcon={colors.gray3}
            placeholder="@username"
            value={text.trim().toLocaleLowerCase()}
            placeholderTextColor={colors.gray}
            containerStyle={{marginBottom: 40}}
            onChangeText={setText}
          />
          <Button
            title="Cadastrar"
            percentWidth={100}
            disabled={!text}
            loading={isLoading}
            onPress={() => handleRegisterUser(text)}
          />
        </View>
      </View>
      <Text
        style={{
          color: 'gray',
          alignSelf: 'center',
          textDecorationLine: 'underline',
        }}>
        Termos de política e privacidade
      </Text>
    </View>
  );
};
