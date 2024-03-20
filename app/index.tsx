import { Stack, Link } from 'expo-router';
import { Text, View, XStack, Image } from 'tamagui';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';
import { StatusBar } from 'expo-status-bar';

const PlaceholderImage = require('../assets/images/background-image.png');

export default function Page() {
  return (
    <View flex={1} backgroundColor={'$background'} alignItems="center">
      <View flex={1} justifyContent="center" alignItems="center">
        <Image
          source={{
            uri: PlaceholderImage,
            width: 320,
            height: 440,
          }}
          borderRadius={18}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
