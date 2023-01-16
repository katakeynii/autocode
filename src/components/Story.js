import React from 'react';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import {Text, Center, VStack, Heading} from 'native-base';
import Video from 'react-native-video';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const Story = ({story}) => {
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      bg="primary.400"
      px={4}
      flex={1}
      style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={'#000'}
      />
      <VStack alignItems="center">
        <Video
          repeat={true}
          source={require('../../data/broadchurch.mp4')}
          style={styles.backgroundVideo}
        />
      </VStack>
      <VStack space={1} align="center" style={styles.panelInfo}>
        <Text style={{color: '#fff'}} fontSize={'2xl'} color="red">
          {story.title}
        </Text>
        <Text style={{color: '#fff'}} fontSize={'sm'} color="red">
          {story.content}
        </Text>
      </VStack>
    </Center>
  );
};
let {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  panelInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '50%',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  backgroundVideo: {
    top: 0,
    left: 0,
    width: width,
    height: width * 0.9 * 1.77,
  },
});
export default Story;
