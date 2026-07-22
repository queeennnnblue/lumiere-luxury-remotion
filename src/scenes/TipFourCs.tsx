import React from 'react';
import {AbsoluteFill} from 'remotion';
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

const CS = [
  {
    en: 'CUT',
    ar: 'القَطع',
    desc: 'سرّ اللمعان والبريق — أهم معيار على الإطلاق',
    accent: COLORS.dustyPink,
  },
  {
    en: 'COLOUR',
    ar: 'اللون',
    desc: 'التدرج من D إلى Z — أفضل قيمة: G–H',
    accent: COLORS.paperBag,
  },
  {
    en: 'CLARITY',
    ar: 'النقاء',
    desc: 'درجات VS1 و VS2 و SI1 نقية للعين المجرّدة',
    accent: COLORS.powderBlue,
  },
  {
    en: 'CARAT',
    ar: 'القيراط',
    desc: 'الوزن والحجم — الأكبر ليس دائماً الأجمل',
    accent: COLORS.burgundy,
  },
];

const CCard: React.FC<{item: (typeof CS)[number]; index: number; delay: number}> = ({
  item,
  index,
  delay,
}) => {
  const p = useAppear(delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateX(${(1 - p) * -70}px)`,
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        background: 'rgba(255,255,255,0.6)',
        borderRadius: 26,
        boxShadow: '0 18px 44px rgba(77,14,19,0.08)',
        padding: '26px 36px',
        width: 900,
      }}
    >
      <div
        style={{
          width: 92,
          height: 92,
          borderRadius: '50%',
          background: item.accent,
          color: index === 3 ? COLORS.creme : COLORS.burgundy,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FONTS.body,
          fontWeight: 800,
          fontSize: 46,
          flexShrink: 0,
        }}
      >
        {arabicDigits(index + 1)}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
        <div style={{display: 'flex', alignItems: 'baseline', gap: 20}}>
          <span
            style={{
              fontFamily: FONTS.heading,
              fontWeight: 700,
              fontSize: 48,
              color: COLORS.burgundy,
            }}
          >
            {item.ar}
          </span>
          <span
            style={{
              fontFamily: FONTS.latin,
              fontSize: 30,
              letterSpacing: 5,
              color: COLORS.ink,
              opacity: 0.55,
            }}
          >
            {item.en}
          </span>
        </div>
        <div
          style={{
            fontFamily: FONTS.body,
            fontWeight: 500,
            fontSize: 33,
            color: COLORS.ink,
            lineHeight: 1.5,
          }}
        >
          {item.desc}
        </div>
      </div>
    </div>
  );
};

// النصيحة ٣ — قاعدة الـ 4C
export const TipFourCs: React.FC = () => (
  <AbsoluteFill style={{direction: 'rtl'}}>
    <LightBackdrop tint={COLORS.dustyPink} />
    <Sparkle x={160} y={320} size={28} delay={20} color={COLORS.dustyPink} />
    <Sparkle x={880} y={500} size={22} delay={55} color={COLORS.paperBag} />

    <AbsoluteFill style={{alignItems: 'center', paddingTop: 130, gap: 46}}>
      <TipBadge n={3} accent={COLORS.dustyPink} />
      <SceneTitle
        title="افهم قاعدة الـ 4C"
        sub="أربعة معايير تحدد جمال الألماسة وسعرها"
        accent={COLORS.dustyPink}
      />

      <div style={{display: 'flex', flexDirection: 'column', gap: 26}}>
        {CS.map((c, i) => (
          <CCard key={c.en} item={c} index={i} delay={45 + i * 22} />
        ))}
      </div>

      <Rise delay={165}>
        <div
          style={{
            background: COLORS.burgundy,
            color: COLORS.creme,
            borderRadius: 24,
            padding: '26px 50px',
            fontFamily: FONTS.body,
            fontWeight: 700,
            fontSize: 37,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          ✨ توليفة الخبراء: قَطع ممتاز + لون G–H + نقاء VS2–SI1
          <br />
          <span style={{color: COLORS.paperBag, fontWeight: 800, fontSize: 35}}>
            💎 وفي لوموند… نوفر لك أفضل مواصفات الـ 4C بأفضل سعر
          </span>
        </div>
      </Rise>
    </AbsoluteFill>
    <Watermark />
  </AbsoluteFill>
);
