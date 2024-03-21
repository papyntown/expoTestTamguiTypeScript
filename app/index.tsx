import { Stack, Link } from 'expo-router';
import { Image as LucideImg } from 'lucide-react-native';
import { Text, View, XStack, Image, Switch, Button, Sheet } from 'tamagui';

import { Container, Main, Title, Subtitle, ButtonText } from '../tamagui.config';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('../assets/images/background-image.png');

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(PlaceholderImage);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View flex={1} backgroundColor={'$background'} alignItems="center">
      <View
        flex={3 / 4}
        width={'100%'}
        justifyContent="center"
        alignItems="center"
        backgroundColor={'$blue10'}>
        <Image
          source={{
            uri: selectedImage,
            width: 320,
            height: 440,
          }}
          borderRadius={18}
          width={'80%'}
        />
      </View>
      <View
        display="flex"
        flex={1 / 4}
        width={'100%'}
        flexDirection="column"
        gap="$2"
        alignItems="center"
        backgroundColor={'$color.red10Dark'}>
        <Button
          backgroundColor={'white'}
          color={'black'}
          size={'$6'}
          width={'80%'}
          borderColor={'$color.red10Dark'}
          onPress={() => setShowAppOptions(true)}>
          {' '}
          <LucideImg color={'black'} />
          Use this photo
        </Button>
        <Button size={'$6'} borderColor={'white'} width={'80%'} onPress={pickImageAsync}>
          Chose a photo
        </Button>
        <Button size={'$6'} borderColor={'white'} width={'80%'} onPress={() => setOpen(true)}>
          OPenz
        </Button>
      </View>
      <Sheet open={open} onOpenChange={setOpen}>
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame>{<Text>Content</Text>}</Sheet.Frame>
      </Sheet>
      <StatusBar style="light" />
    </View>
  );
}
