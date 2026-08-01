import React from 'react';
import {AbsoluteFill} from 'remotion';
import {IG_POSTS} from './posts';
import {COLORS} from '../theme';

// معاينة الجريد كما سيظهر في بروفايل إنستقرام: ٥ صفوف × ٣ أعمدة
// كل خانة 360×450 (البوست الأصلي 1080×1350 مصغّر ثلث)
export const IgGridPreview: React.FC = () => (
  <AbsoluteFill style={{background: COLORS.creme}}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 360px)',
        gap: 6,
        direction: 'rtl',
        padding: 6,
      }}
    >
      {IG_POSTS.map(({id, component: C}) => (
        <div key={id} style={{width: 360, height: 450, overflow: 'hidden', position: 'relative'}}>
          <div
            style={{
              width: 1080,
              height: 1350,
              transform: 'scale(0.33333)',
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <C />
          </div>
        </div>
      ))}
    </div>
  </AbsoluteFill>
);
