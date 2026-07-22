import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {COLORS, FONTS, arabicDigits} from '../theme';
import {
  LightBackdrop,
  Rise,
  SceneTitle,
  Sparkle,
  TipBadge,
  Watermark,
  useAppear,
} from '../ui/atoms';

const KARATS = [
  {k: 9, pct: 37.5},
  {k: 14, pct: 58.5},
  {k: 18, pct: 75},
];

const KaratBar: React.FC<{k: number; pct: number; delay: number}> = ({k, pct, delay}) => {
  const frame = useCurrentFrame();
  const p = useAppear(delay);
  const fill = interpolate(frame - delay, [8, 45], [0, pct], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 26, opacity: p, width: 850}}>
      <div
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 52,
          color: COLORS.burgundy,
          width: 190,
          textAlign: 'center',
        }}
      >
        عيار {arabicDigits(k)}
      </div>
      <div
        style={{
          flex: 1,
          height: 46,
          borderRadius: 23,
          background: 'rgba(77,14,19,0.08)',
          overflow: 'hidden',
          direction: 'rtl',
        }}
      >
        <div
          style={{
            width: `${fill}%`,
            height: '100%',
            borderRadius: 23,
            background: `linear-gradient(270deg, ${COLORS.paperBag}, ${COLORS.dustyPink})`,
          }}
        />
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 700,
          fontSize: 40,
          color: COLORS.ink,
          width: 170,
        }}
      >
        {arabicDigits(pct)}٪ ذهب
      </div>
    </div>
  );
};

const MetalCard: React.FC<{
  title: string;
  lines: string[];
  accent: string;
  delay: number;
}> = ({title, lines, accent, delay}) => {
  const p = useAppear(delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * 50}px)`,
        background: 'rgba(255,255,255,0.55)',
        border: `2.5px solid ${accent}`,
        borderRadius: 30,
        padding: '34px 40px',
        width: 430,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 48,
          color: COLORS.burgundy,
          textAlign: 'center',
        }}
      >
        {title}
      </div>
      {lines.map((l) => (
        <div
          key={l}
          style={{
            fontFamily: FONTS.body,
            fontWeight: 500,
            fontSize: 33,
            lineHeight: 1.5,
            color: COLORS.ink,
            display: 'flex',
            gap: 12,
          }}
        >
          <span style={{color: accent, fontWeight: 800}}>✓</span>
          {l}
        </div>
      ))}
    </div>
  );
};

// النصيحة ١ — ذهب أم بلاتين؟
export const TipMetal: React.FC = () => (
  <AbsoluteFill style={{direction: 'rtl'}}>
    <LightBackdrop tint={COLORS.paperBag} />
    <Sparkle x={140} y={300} size={30} delay={20} color={COLORS.dustyPink} />
    <Sparkle x={900} y={520} size={24} delay={50} color={COLORS.paperBag} />

    <AbsoluteFill style={{alignItems: 'center', paddingTop: 130, gap: 52}}>
      <TipBadge n={1} accent={COLORS.paperBag} />
      <SceneTitle
        title="ذهب أم بلاتين؟"
        sub="لاحظ أولاً: هل ترتدي مجوهرات ذهبية أم فضية يومياً؟"
        accent={COLORS.paperBag}
      />

      <Rise delay={40}>
        <p
          style={{
            margin: 0,
            fontFamily: FONTS.body,
            fontWeight: 700,
            fontSize: 42,
            color: COLORS.burgundy,
          }}
        >
          الذهب معدن ليّن… لذلك تُضاف إليه معادن أخرى:
        </p>
      </Rise>

      <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
        {KARATS.map((row, i) => (
          <KaratBar key={row.k} k={row.k} pct={row.pct} delay={55 + i * 18} />
        ))}
      </div>

      <div style={{display: 'flex', gap: 40, marginTop: 10}}>
        <MetalCard
          title="الذهب الأبيض"
          lines={['مظهر أبيض لامع وعصري', 'يحتاج طلاء الروديوم مع الوقت']}
          accent={COLORS.dustyPink}
          delay={135}
        />
        <MetalCard
          title="البلاتين"
          lines={['أبيض طبيعي فائق المتانة', 'لا يسبب الحساسية ولا يحتاج طلاء']}
          accent={COLORS.powderBlue}
          delay={150}
        />
      </div>
    </AbsoluteFill>
    <Watermark />
  </AbsoluteFill>
);
