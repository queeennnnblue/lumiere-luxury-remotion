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

const CompareCard: React.FC<{
  title: string;
  subtitle: string;
  points: string[];
  accent: string;
  delay: number;
}> = ({title, subtitle, points, accent, delay}) => {
  const p = useAppear(delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * 60}px)`,
        background: 'rgba(255,255,255,0.6)',
        borderTop: `10px solid ${accent}`,
        borderRadius: 28,
        boxShadow: '0 24px 60px rgba(77,14,19,0.10)',
        padding: '36px 38px',
        width: 440,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 50,
          color: COLORS.burgundy,
          textAlign: 'center',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 500,
          fontSize: 30,
          color: COLORS.ink,
          opacity: 0.65,
          textAlign: 'center',
          marginTop: -8,
        }}
      >
        {subtitle}
      </div>
      {points.map((pt) => (
        <div
          key={pt}
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
          {pt}
        </div>
      ))}
    </div>
  );
};

// النصيحة ٢ — ألماس مخبري أم طبيعي؟
export const TipDiamonds: React.FC = () => {
  const vsIn = useAppear(70, 120);
  return (
    <AbsoluteFill style={{direction: 'rtl'}}>
      <LightBackdrop tint={COLORS.powderBlue} />
      <Sparkle x={150} y={340} size={28} delay={15} color={COLORS.powderBlue} />
      <Sparkle x={890} y={480} size={24} delay={45} color={COLORS.dustyPink} />

      <AbsoluteFill style={{alignItems: 'center', paddingTop: 130, gap: 50}}>
        <TipBadge n={2} accent={COLORS.powderBlue} />
        <SceneTitle
          title="ألماس مخبري أم طبيعي؟"
          sub="كلاهما ألماس حقيقي ١٠٠٪ — الفرق فقط في المنشأ"
          accent={COLORS.powderBlue}
        />

        <div style={{display: 'flex', gap: 44, alignItems: 'stretch', position: 'relative'}}>
          <CompareCard
            title="المخبري"
            subtitle="يُصنع في بيئة مخبرية"
            points={[
              'مطابق كيميائياً وبصرياً للطبيعي',
              `أوفر بنسبة ${arabicDigits(20)}–${arabicDigits(40)}٪`,
              'خيار مستدام وصديق للبيئة',
              'مقاسات وأشكال متوفرة أكثر',
            ]}
            accent={COLORS.powderBlue}
            delay={45}
          />
          <CompareCard
            title="الطبيعي"
            subtitle="تكوّن في الأرض عبر ملايين السنين"
            points={[
              'أكثر ندرة ومحدودية',
              'قيمة عاطفية وإرث تقليدي',
              'يُنظر إليه كخيار كلاسيكي خالد',
              'تكلفة أعلى عند الشراء',
            ]}
            accent={COLORS.dustyPink}
            delay={60}
          />
          <div
            style={{
              position: 'absolute',
              top: '42%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${vsIn})`,
              width: 110,
              height: 110,
              borderRadius: '50%',
              background: COLORS.burgundy,
              color: COLORS.creme,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: FONTS.body,
              fontWeight: 800,
              fontSize: 44,
              boxShadow: '0 16px 40px rgba(77,14,19,0.35)',
            }}
          >
            ضدّ
          </div>
        </div>

        <Rise delay={130}>
          <div
            style={{
              background: COLORS.burgundy,
              color: COLORS.creme,
              borderRadius: 999,
              padding: '24px 54px',
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 39,
            }}
          >
            💎 بالعين المجرّدة… لا يمكنك التفريق بينهما إطلاقاً
          </div>
        </Rise>
      </AbsoluteFill>
      <Watermark />
    </AbsoluteFill>
  );
};
