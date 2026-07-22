import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

export const fontsReady = Promise.all([
  loadFont({
    family: 'Amiri',
    url: staticFile('fonts/Amiri-Regular.ttf'),
    weight: '400',
  }),
  loadFont({
    family: 'Amiri',
    url: staticFile('fonts/Amiri-Bold.ttf'),
    weight: '700',
  }),
  loadFont({
    family: 'Tajawal',
    url: staticFile('fonts/Tajawal-Regular.ttf'),
    weight: '400',
  }),
  loadFont({
    family: 'Tajawal',
    url: staticFile('fonts/Tajawal-Medium.ttf'),
    weight: '500',
  }),
  loadFont({
    family: 'Tajawal',
    url: staticFile('fonts/Tajawal-Bold.ttf'),
    weight: '700',
  }),
  loadFont({
    family: 'Tajawal',
    url: staticFile('fonts/Tajawal-ExtraBold.ttf'),
    weight: '800',
  }),
  loadFont({
    family: 'Playfair Display',
    url: staticFile('fonts/PlayfairDisplay.ttf'),
    weight: '400 900',
  }),
]);
