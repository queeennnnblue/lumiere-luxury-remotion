import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Hook} from './scenes/Hook';
import {TipMetal} from './scenes/TipMetal';
import {TipDiamonds} from './scenes/TipDiamonds';
import {TipFourCs} from './scenes/TipFourCs';
import {TipSize} from './scenes/TipSize';
import {Outro} from './scenes/Outro';

const T = 20; // مدة الانتقال بين المشاهد

// المجموع: 220+340+320+380+300+340 − 5×20 = 1800 إطار = 60 ثانية
export const LumiereGuideVideo: React.FC = () => (
  <AbsoluteFill style={{background: '#000'}}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={220}>
        <Hook />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: T})}
      />

      <TransitionSeries.Sequence durationInFrames={340}>
        <TipMetal />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({direction: 'from-left'})}
        timing={linearTiming({durationInFrames: T})}
      />

      <TransitionSeries.Sequence durationInFrames={320}>
        <TipDiamonds />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({direction: 'from-left'})}
        timing={linearTiming({durationInFrames: T})}
      />

      <TransitionSeries.Sequence durationInFrames={380}>
        <TipFourCs />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide({direction: 'from-left'})}
        timing={linearTiming({durationInFrames: T})}
      />

      <TransitionSeries.Sequence durationInFrames={300}>
        <TipSize />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: T})}
      />

      <TransitionSeries.Sequence durationInFrames={340}>
        <Outro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
