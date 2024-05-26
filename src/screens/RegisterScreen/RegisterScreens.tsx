import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {LogoComponent} from '@brand';
import {Button, Icon, Input} from '@components';
import {useRegisterUser} from '@domain';
import {useAppData} from '@hooks';
import {CommonActions} from '@react-navigation/native';
import {AppScreenProps} from '@routes';
import {Responsive} from '@services';
import {colors} from '@theme';

import {styles} from './Register.styles';

export const RegisterScreen = ({
  navigation,
}: AppScreenProps<'RegisterScreen'>) => {
  const {hasUsers} = useAppData();

  const [text, setText] = useState('');

  const {isLoading, handleRegisterUser} = useRegisterUser({
    onSuccess: () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'ListUsersScreen'}],
        }),
      );
    },
    onError: error => {
      Alert.alert('Erro', error);
    },
  });

  const handleOpenPrivacyPolicy = () => {
    Linking.openURL(
      'https://github.com/StarBem/mobile-react-native-developer-practice-test',
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          {hasUsers && (
            <View style={styles.buttonContainer}>
              <Icon name="arrow-left" onPress={() => navigation.goBack()} />
            </View>
          )}
          <View style={styles.content}>
            <LogoComponent
              alignSelf={hasUsers ? 'flex-start' : 'center'}
              width={Responsive.widthScale(0.5)}
            />

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
          <Text style={styles.textFooter}>
            Termos de{' '}
            <Text
              style={styles.textUnderline}
              onPress={handleOpenPrivacyPolicy}>
              política
            </Text>{' '}
            e{' '}
            <Text
              style={styles.textUnderline}
              onPress={handleOpenPrivacyPolicy}>
              privacidade
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
