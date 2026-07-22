import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from 'remotion';
import {COLORS, FONTS} from '../theme';
import {Rise, RingIcon, Sparkle, Divider, Logo, useAppear} from '../ui/atoms';

// الخُطّاف: خلفية عنّابية داكنة + سؤال صادم
export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const ringIn = useAppear(6, 60);
  const zoom = interpolate(frame, [0, 220], [1, 1.06]);

  return (
    <AbsoluteFill style={{background: COLORS.burgundyDeep, direction: 'rtl'}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(90% 55% at 50% 30%, ${COLORS.burgundy} 0%, transparent 70%)`,
          transform: `scale(${zoom})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(140% 120% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      <Sparkle x={190} y={430} size={40} delay={10} color={COLORS.paperBag} />
      <Sparkle x={840} y={360} size={30} delay={35} color={COLORS.dustyPink} />
      <Sparkle x={720} y={720} size={24} delay={55} color={COLORS.creme} />
      <Sparkle x={260} y={1500} size={34} delay={25} color={COLORS.paperBag} />
      <Sparkle x={880} y={1420} size={26} delay={70} color={COLORS.powderBlue} />

      <AbsoluteFill
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 90px',
          gap: 44,
        }}
      >
        <div
          style={{
            opacity: ringIn,
            transform: `translateY(${(1 - ringIn) * 40}px) scale(${0.8 + ringIn * 0.2})`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}
        >
          <Logo width={430} dark />
          <RingIcon size={150} stroke={COLORS.paperBag} gem={COLORS.powderBlue} />
        </div>

        <Rise delay={16}>
          <h1
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: 104,
              lineHeight: 1.4,
              textAlign: 'center',
              color: COLORS.creme,
            }}
          >
            قبل أن تشتري
            <br />
            خاتم الخطوبة…
          </h1>
        </Rise>

        <Rise delay={46}>
          <h2
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontWeight: 800,
              fontSize: 60,
              lineHeight: 1.55,
              textAlign: 'center',
              color: COLORS.dustyPink,
            }}
          >
            ٤ أسرار يعرفها الصاغة
            <br />
            <span style={{color: COLORS.paperBag}}>ولا يخبرونك بها!</span>
          </h2>
        </Rise>

        <Divider color={COLORS.dustyPink} delay={70} />

        <Rise delay={84}>
          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontWeight: 500,
              fontSize: 40,
              color: COLORS.creme,
              opacity: 0.75,
              letterSpacing: 1,
            }}
          >
            دليل لوموند المختصر — تابع للنهاية
          </p>
        </Rise>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
