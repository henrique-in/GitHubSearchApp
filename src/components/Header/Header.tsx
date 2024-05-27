import React from 'react';
import {View} from 'react-native';

import {LogoComponent} from '@brand';
import {Button, Icon} from '@components';
import {useNavigation} from '@react-navigation/native';
import {Responsive} from '@services';

import {Avatar} from '../Avatar/Avatar';

import {styles} from './Header.styles';

interface Props {
  type: 'primary' | 'secondary';
  avatarUrl?: string;
}

export const Header = ({type = 'primary', avatarUrl}: Props) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      {type === 'primary' && (
        <>
          <LogoComponent width={Responsive.widthScale(0.3)} />
          <Button
            title="Adicionar novo"
            percentWidth={45}
            height={40}
            onPress={() => handleNavigate()}
          />
        </>
      )}

      {type === 'secondary' && (
        <>
          <Icon name="arrow-left" onPress={() => navigation.goBack()} />
          <Avatar url={avatarUrl as string} size={32} />
        </>
      )}
    </View>
  );
};
