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

type Metal = {
  name: string;
  pct: number;
  pctLabel: string;
  desc: string;
  best: boolean;
};

const METALS: Metal[] = [
  {
    name: 'عيار ٢٤',
    pct: 99.9,
    pctLabel: `${arabicDigits(99.9)}٪ ذهب`,
    desc: 'ذهب خالص — ليّن جداً على اللبس اليومي',
    best: false,
  },
  {
    name: 'عيار ٢١',
    pct: 87.5,
    pctLabel: `${arabicDigits(87.5)}٪ ذهب`,
    desc: 'الأكثر شيوعاً في الذهب التقليدي',
    best: false,
  },
  {
    name: 'عيار ١٨',
    pct: 75,
    pctLabel: `${arabicDigits(75)}٪ ذهب`,
    desc: 'صلابة مثالية لخواتم الألماس واللبس اليومي',
    best: true,
  },
  {
    name: 'فضة ٩٢٥',
    pct: 92.5,
    pctLabel: `${arabicDigits(92.5)}٪ فضة`,
    desc: 'الفضة الإسترلينية — أناقة عملية بسعر ذكي',
    best: true,
  },
  {
    name: 'البلاتين',
    pct: 95,
    pctLabel: `${arabicDigits(95)}٪ نقاء`,
    desc: 'أبيض طبيعي فائق المتانة ولا يسبب الحساسية',
    best: true,
  },
];

// علامة الصح الخضراء — الخيار الأفضل
const BestCheck: React.FC<{delay: number}> = ({delay}) => {
  const p = useAppear(delay, 160);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        transform: `scale(${p})`,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: COLORS.green,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 38,
          fontWeight: 800,
          fontFamily: FONTS.body,
          boxShadow: '0 10px 24px rgba(62,124,79,0.35)',
        }}
      >
        ✓
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 800,
          fontSize: 22,
          color: COLORS.green,
        }}
      >
        خيار أفضل
      </div>
    </div>
  );
};

const MetalRow: React.FC<{m: Metal; delay: number}> = ({m, delay}) => {
  const frame = useCurrentFrame();
  const p = useAppear(delay);
  const fill = interpolate(frame - delay, [8, 45], [0, m.pct], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateX(${(1 - p) * -60}px)`,
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        width: 950,
        background: m.best ? 'rgba(62,124,79,0.08)' : 'rgba(255,255,255,0.5)',
        border: m.best ? `2.5px solid ${COLORS.green}` : '2.5px solid transparent',
        borderRadius: 26,
        padding: '22px 30px',
      }}
    >
      <div style={{width: 250, display: 'flex', flexDirection: 'column', gap: 4}}>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: 46,
            color: COLORS.burgundy,
            lineHeight: 1.15,
          }}
        >
          {m.name}
        </div>
        <div
          style={{
            fontFamily: FONTS.body,
            fontWeight: 700,
            fontSize: 27,
            color: COLORS.ink,
            opacity: 0.75,
          }}
        >
          {m.pctLabel}
        </div>
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 10}}>
        <div
          style={{
            height: 34,
            borderRadius: 17,
            background: 'rgba(77,14,19,0.08)',
            overflow: 'hidden',
            direction: 'rtl',
          }}
        >
          <div
            style={{
              width: `${fill}%`,
              height: '100%',
              borderRadius: 17,
              background: m.best
                ? `linear-gradient(270deg, ${COLORS.green}99, ${COLORS.green})`
                : `linear-gradient(270deg, ${COLORS.paperBag}, ${COLORS.dustyPink})`,
            }}
          />
        </div>
        <div
          style={{
            fontFamily: FONTS.body,
            fontWeight: 500,
            fontSize: 27,
            lineHeight: 1.4,
            color: COLORS.ink,
          }}
        >
          {m.desc}
        </div>
      </div>
      <div style={{width: 92, display: 'flex', justifyContent: 'center'}}>
        {m.best ? <BestCheck delay={delay + 26} /> : null}
      </div>
    </div>
  );
};

// النصيحة ١ — ذهب، فضة أم بلاتين؟
export const TipMetal: React.FC = () => (
  <AbsoluteFill style={{direction: 'rtl'}}>
    <LightBackdrop tint={COLORS.paperBag} />
    <Sparkle x={140} y={300} size={30} delay={20} color={COLORS.dustyPink} />
    <Sparkle x={900} y={520} size={24} delay={50} color={COLORS.paperBag} />

    <AbsoluteFill style={{alignItems: 'center', paddingTop: 120, gap: 42}}>
      <TipBadge n={1} accent={COLORS.paperBag} />
      <SceneTitle
        title="ذهب، فضة أم بلاتين؟"
        sub="لاحظ أولاً: ما الذي ترتديه يومياً؟ ثم اختر المعدن الأنسب"
        accent={COLORS.paperBag}
      />

      <div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
        {METALS.map((m, i) => (
          <MetalRow key={m.name} m={m} delay={45 + i * 18} />
        ))}
      </div>

      <Rise delay={150}>
        <div
          style={{
            background: COLORS.burgundy,
            color: COLORS.creme,
            borderRadius: 999,
            padding: '20px 48px',
            fontFamily: FONTS.body,
            fontWeight: 700,
            fontSize: 34,
          }}
        >
          ✨ عيار ١٨ والفضة ٩٢٥ والبلاتين… توازن مثالي بين الجمال والمتانة
        </div>
      </Rise>
    </AbsoluteFill>
    <Watermark />
  </AbsoluteFill>
);
