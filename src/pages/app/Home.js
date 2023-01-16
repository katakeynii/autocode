import React, {useState} from 'react';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import {Text, Center, VStack, Heading} from 'native-base';
import Video from 'react-native-video';
import Story from '../../components/Story';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const stories = [
  {
    title: 'Bonjour ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    title: 'Salam aleykoum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    title: 'Test djo',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    title: 'Mister booo',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    title: 'Great way',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    title: 'george bush',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
];
const Home = () => {
  const [story, setStory] = useState(0);
  const onSwipeUp = gestureState => {
    const x = story + 1 >= stories.length ? 0 : story + 1;
    setStory(x);
  };
  const onSwipeDown = gestureState => {
    let x = story - 1;
    x = x <= 0 ? stories.length - 1 : x;
    setStory(x);
  };
  const onSwipe = (direction, state) => {};
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeUp={state => {
        onSwipeUp(state);
      }}
      onSwipeDown={onSwipeDown}
      config={config}
      style={{
        flex: 1,
      }}>
      <Story story={stories[story]} />
    </GestureRecognizer>
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
export default Home;
