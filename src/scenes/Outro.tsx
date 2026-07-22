import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONTS} from '../theme';
import {Divider, RingIcon, Rise, Sparkle, useAppear} from '../ui/atoms';

// الخاتمة — دعوة للحفظ والمتابعة
export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const ringIn = useAppear(8, 70);
  const pulse = 1 + Math.sin(frame / 9) * 0.03;

  return (
    <AbsoluteFill style={{background: COLORS.burgundyDeep, direction: 'rtl'}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(90% 60% at 50% 35%, ${COLORS.burgundy} 0%, transparent 72%)`,
        }}
      />
      <Sparkle x={180} y={420} size={36} delay={12} color={COLORS.paperBag} />
      <Sparkle x={860} y={380} size={28} delay={40} color={COLORS.dustyPink} />
      <Sparkle x={250} y={1420} size={30} delay={60} color={COLORS.creme} />
      <Sparkle x={840} y={1520} size={26} delay={28} color={COLORS.powderBlue} />

      <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', gap: 46, padding: '0 90px'}}>
        <div
          style={{
            opacity: ringIn,
            transform: `scale(${(0.8 + ringIn * 0.2) * pulse})`,
          }}
        >
          <RingIcon size={180} stroke={COLORS.paperBag} gem={COLORS.powderBlue} />
        </div>

        <Rise delay={18}>
          <h1
            style={{
              margin: 0,
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: 92,
              lineHeight: 1.45,
              textAlign: 'center',
              color: COLORS.creme,
            }}
          >
            احفظ هذا الفيديو
            <br />
            قبل زيارة الصائغ 💍
          </h1>
        </Rise>

        <Divider color={COLORS.dustyPink} delay={45} />

        <Rise delay={58}>
          <p
            style={{
              margin: 0,
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 46,
              textAlign: 'center',
              lineHeight: 1.7,
              color: COLORS.dustyPink,
            }}
          >
            وتابعنا لمزيد من أسرار
            <br />
            عالم المجوهرات الفاخرة
          </p>
        </Rise>

        <Rise delay={80}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 24}}>
            <div
              style={{
                fontFamily: FONTS.latin,
                fontSize: 66,
                letterSpacing: 16,
                color: COLORS.creme,
              }}
            >
              LUMIÈRE
            </div>
            <div
              style={{
                fontFamily: FONTS.body,
                fontWeight: 500,
                fontSize: 32,
                letterSpacing: 4,
                color: COLORS.paperBag,
              }}
            >
              لـومـيـيـر — مجوهرات فاخرة
            </div>
          </div>
        </Rise>
      </AbsoluteFill>

      {/* تلاشٍ للنهاية */}
      <AbsoluteFill
        style={{
          background: '#000',
          opacity: interpolate(frame, [270, 305], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      />
    </AbsoluteFill>
  );
};
