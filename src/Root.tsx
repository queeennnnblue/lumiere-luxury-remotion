import React from 'react';
import {Composition} from 'remotion';
import {LumiereGuideVideo} from './Video';
import './fonts';

// التصميم على 1080×1920، والتصدير بـ --scale=2 → دقة 4K عمودية (2160×3840)
export const RemotionRoot: React.FC = () => (
  <Composition
    id="LumiereGuide"
    component={LumiereGuideVideo}
    durationInFrames={1800}
    fps={30}
    width={1080}
    height={1920}
  />
);
